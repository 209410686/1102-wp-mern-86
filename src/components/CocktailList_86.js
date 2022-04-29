import React from 'react';
import Cocktail_86 from './Cocktail_86';
import Loading_86 from './Loading_86';
import { useGlobalContext } from '../context';

const CocktailList_86 = () => {
  const { loading, cocktails } = useGlobalContext();
  if (loading) {
    return <Loading_86 />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail_86 key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList_86;
