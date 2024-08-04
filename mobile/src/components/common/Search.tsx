import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import { iconStyles } from '~/styles/globalStyles';
import { SearchStyle } from '~/styles/components/common/SearchStyle';
import { assets } from '~/styles/app/assets';

interface SearchProps {
    value?: string;
    onPress?: () => void;
    onSelect?: (item: string) => void;
    onChange?: (text: string) => void;
    placeholder?: string;
    suggestions?: string[];
}
const Search: React.FC<SearchProps> = ({
    value,
    onPress,
    onSelect,
    onChange,
    placeholder,
    suggestions = [],
}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [focus, setFocus] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (text: string) => {
        setSearchQuery(text);
        onChange?.(text);
        setFilteredSuggestions(
            suggestions.filter(item =>
                item.toLowerCase().includes(text.toLowerCase())
            )
        );
    };
    const handleSelect = (item: string) => {
        onSelect?.(item);
        setFilteredSuggestions([]);
        setFocus(false);
    };
    const handleBack = () => {
        Keyboard.dismiss();
        setSearchQuery('');
        setFocus(false);
    }
    return (
        <View style={SearchStyle.container}>
            <View style={SearchStyle.searchContainer}>
                {
                    focus &&
                    <TouchableOpacity onPress={handleBack} style={[iconStyles.icon24, SearchStyle.buttonBack]}>
                        <Image style={iconStyles.icon24} source={assets.icon.arrowBack} />
                    </TouchableOpacity>
                }
                <TextInput
                    style={SearchStyle.input}
                    value={searchQuery}
                    onChangeText={handleChange}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                 <TouchableOpacity onPress={onPress} style={iconStyles.icon24}>
                        <Image style={iconStyles.icon24} source={assets.icon.search} />
                    </TouchableOpacity>
            </View>
            {focus && (
                <FlatList
                    data={filteredSuggestions}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelect(item)}>
                            <Text style={SearchStyle.suggestionItem}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    style={SearchStyle.suggestionList}
                />
            )}
        </View>
    );
}

export default Search;  