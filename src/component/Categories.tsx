import React from 'react';
import classes from '../css/Categories.module.css'

type CategoriesProps = {
  categories: string[]
};

const Categories: React.FC<CategoriesProps> = ({categories}) => {
  return (
    <div>
      {categories.map((item, index) => 
        <button key={index} type='button' className={classes.categoriesButton}>{item}</button>
      )}
    </div>
  )
}

export default Categories;