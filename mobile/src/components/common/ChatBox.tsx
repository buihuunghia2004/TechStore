import React, {useState} from 'react';
import {View, TextInput, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import IconButton from './IconButton';
import {containerStyles} from '~/styles/globalStyles';
import {assets} from '~/styles/app/assets';

interface ChatBoxProps {
  onPress: () => void;
  onChange: (text: string) => void;
  placeholder?: string;
  positionStyle?: StyleProp<ViewStyle>;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  onPress,
  onChange,
  placeholder,
  positionStyle,
}) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (text: string) => {
    setInput(text);
    onChange(text);
  };

  const handleSend = () => {
    if (input.trim()) {
      onPress();
      setInput('');
    }
  };
  return (
    <View style={[styles.container, positionStyle]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={input}
        onChangeText={handleChange}
      />
      <IconButton
        positionStyle={styles.icon}
        icon={input ? assets.icon.send_bold : assets.icon.send_outline}
        onPress={handleSend}
      />
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  container: {
    ...containerStyles.containerBetween,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 24,
    paddingTop: 10,
    paddingBottom: 16,
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 9,
    marginVertical: 8,
  },
});
