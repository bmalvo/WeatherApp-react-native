import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../themes/colors';

type SearchInputProps = {

    onSearch: (value: string) => void;
}

const SearchInput = ({onSearch}: SearchInputProps) => {

    const [value, setValue] = useState('');

    const OnSearchPress = () => {

        onSearch(value);
        setValue('');

    }

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder='wpisz lokalizację'
                placeholderTextColor={'magenta'}
                selectionColor={'magenta'}
                onChangeText={setValue}
                value={value}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={OnSearchPress}>
                <Text style={styles.buttonText}>
                    Dodaj
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default SearchInput

const styles = StyleSheet.create({

    
  input: {

    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.link,
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: COLORS.text,
    borderRadius: 10
  },

  button: {

    width: '100%',
    backgroundColor: COLORS.link,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {

    color: COLORS.text,
    fontSize: 16
  },
})