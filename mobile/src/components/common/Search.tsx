import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {iconStyles} from '~/styles/globalStyles';
import {SearchStyle} from '~/styles/components/common/SearchStyle';
import {assets} from '~/styles/app/assets';

interface SearchProps {
  value?: string;
  onPress?: () => void;
  onSelect?: (item: string) => void;
  onChange?: (text: string) => void;
  placeholder?: string;
}
const Search: React.FC<SearchProps> = ({
  value,
  onPress,
  onSelect,
  onChange,
  placeholder,
}) => {
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (text: string) => {
    setSearchQuery(text);
    onChange?.(text);
  };
  const handleSelect = (item: string) => {
    onSelect?.(item);
    setFocus(false);
  };
  const handleBack = () => {
    Keyboard.dismiss();
    setSearchQuery('');
    setFocus(false);
  };
  return (
    <View style={SearchStyle.container}>
      <View style={SearchStyle.searchContainer}>
        {focus && (
          <TouchableOpacity
            onPress={handleBack}
            style={[iconStyles.icon24, SearchStyle.buttonBack]}>
            <Image style={iconStyles.icon24} source={assets.icon.arrowBack} />
          </TouchableOpacity>
        )}
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
        <TouchableOpacity
          onPress={() => console.log('aaaaa')}
          style={styles.container}></TouchableOpacity>
      )}
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: 50,
    bottom: 0,
    borderRadius: 10,
  },
});
