import { GridItemType } from '../../types/GridItemType'
import * as styles from './style'
import b7web from '../../svgs/b7.svg'
import {Items} from '../../data/Items'

type Props={
    item: GridItemType
    onClick: () => void
}
export const GridItem = ({item, onClick}:Props)=>{
    return (
      <styles.container 
      shownBackground={(item.shown || item.permanentShown)}
      onClick={onClick}>
        {(!item.permanentShown && !item.shown) &&                               
         <styles.Icon 
         opacity={.1}
         src={b7web} alt=''/>
        }
        {(item.shown || item.permanentShown) && item.item !==null &&
         <styles.Icon 
         
         src={Items[item.item].icon } alt=''/>
        }
      </styles.container>
    )
}