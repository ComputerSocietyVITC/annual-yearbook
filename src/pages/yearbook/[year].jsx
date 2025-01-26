import React from 'react';

const YearPage = ({ pageContext }) => {
    const { year } = pageContext;

    return (
        <div>
            <h1>Yearbook for {year}</h1>
            <p>Welcome to the yearbook page for {year}!</p>
        </div>
    );
};

export default YearPage;
