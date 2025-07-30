import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";


type ListItem = {

  title: string;
  value: string;

}

export const useLocationList = () => {

    const [list, setList] = useState<ListItem[]>([]);
    const { getItem, setItem } = useAsyncStorage('loactionList');

    useEffect(() => {

        const init = async() => {
            
            const storageitem = await getItem()
            if (storageitem) {

                setList(JSON.parse(storageitem))
            }
        }

        init()
    })
    
    const addToList = (item: ListItem) => {

        const newList = [...list, item];
        setList(newList);
        setItem(JSON.stringify(newList));
    }

    return {

        list,
        addToList
    }
};