import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


type ListItem = {

    id: string;
  title: string;
  value: string;

}

export const useLocationList = () => {

    const [list, setList] = useState<ListItem[]>([]);
    const { getItem, setItem, removeItem } = useAsyncStorage('loactionList');

    useEffect(() => {

        // removeItem()
        const init = async() => {
            
            const storageitem = await getItem()
            if (storageitem) {

                setList(JSON.parse(storageitem))
            }
        }

        init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const addToList = (item: Omit<ListItem, 'id'>) => {

        const newList = [...list, { ...item, id: uuidv4() }];
        setList(newList);
        setItem(JSON.stringify(newList));
    }

    const removeFromList = (item: ListItem) => {

        const newList = [...list];
        const toRemoveIndex = newList.findIndex((listElement) => listElement.id === item.id)
        
        if (toRemoveIndex !== -1) {

            newList.splice(toRemoveIndex, 1);
            setList(newList);
            setItem(JSON.stringify(newList));
        }
    }

    return {

        list,
        addToList,
        removeFromList
    }
};