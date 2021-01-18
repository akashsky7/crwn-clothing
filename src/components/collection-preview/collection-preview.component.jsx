import { findAllByTitle } from '@testing-library/react';
import React from'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <div className = 'collection-preview'>
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {
                items.filter((item, idx)=>idx < 4).map(({id, ...otherItemProps})=>(
                    <CollectionItem key={id}{...otherItemProps}/>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;
