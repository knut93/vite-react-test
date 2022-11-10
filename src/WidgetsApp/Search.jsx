import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    /*
        No second arg: On initial render and also upon rerender
        Empty array: On initial render 
        Array w/ value: On initial render and every time the value updates between renders
    */
  
    useEffect(() => {
    /*
        We can't use async with the useEffect declaration, will have to do it inside the function call. There are three possible methods.

        1) Declare the search function and then call it.
            const search = async () => {
                await axios.get();
            }
            search();

        2) Define method within (async...) and immediately call it using (). No performance benefit or anything.
            (async () => {
                await axios.get('asfdsaf');
            })();
            
        3) Promises
            axios.get('whatever')
            .then((response) => {
                console.log(response.data)
            })
    */    
        
        const search = async () => {
            const response = await axios.get('https://api.mangadex.org/manga', {
                params: {
                    title: term
                },
            })

            setResults(response.data.data);
            console.log(results);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if(term) {
                    search();
                }
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            }
        }

    }, [term]);
    
    
    const renderedResults = results.map((result) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">
                        {result.attributes.title.en}
                    </div>
                    {result.attributes.description.en}
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <label>Enter Search Term</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="input"
                />
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;