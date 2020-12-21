
import { Component } from 'react';
import CollectPreview from '../../components/preview-collection/collection-preview.component.js';
import SHOP_DATA from './shop.data.js'

class ShopPage extends Component {
    constructor(props){
        super(props)

            this.state = {
            collections: SHOP_DATA
            }
    }
    render(){
      const  {collections} = this.state;
        return (
    <div className="shop-page">
 
 {collections.map(({id, ...otherCollectionProps})=>(
     <CollectPreview
        key={id}
        {...otherCollectionProps}
     />
     
     ))}
    </div>
            ); 
    }

}
export default ShopPage;