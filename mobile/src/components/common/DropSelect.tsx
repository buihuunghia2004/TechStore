import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {DropSelectStyle} from '~/styles/components/common/DropSelectStyle';
import {assets} from '~/styles/app/assets';
import {iconStyles, textStyles} from '~/styles/globalStyles';
import TextUnderline from './TextUnderline';
interface Props {
  title: string;
  data: string[];
  onItemPress?: () => void;
  positionStyle?: StyleProp<ViewStyle>;
}
const DropSelect: React.FC<Props> = ({
  title,
  data = [],
  positionStyle,
  onItemPress,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  return (
    <View style={[DropSelectStyle.container, positionStyle]}>
      <TouchableOpacity activeOpacity={1}
        style={DropSelectStyle.titleContainer}
        onPress={() => setIsExpanded(prev => !prev)}>
        <Text style={DropSelectStyle.title}>{title}</Text>
        <Image source={isExpanded ? assets.icon.arrowUp : assets.icon.arrowDown} style={iconStyles.icon20} />
      </TouchableOpacity>
      {isExpanded && (
        <View style={DropSelectStyle.dataContainer}>
          {data.map((item, index) => (
            <TouchableOpacity onPress={() => {setCurrentIndex(index); onItemPress?.()}} key={index}>
              {currentIndex === index ? <TextUnderline text={item} isColor fontStyle={textStyles.body_lg}/> : <Text>{item}</Text>}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropSelect;
