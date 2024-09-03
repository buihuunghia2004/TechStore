import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {
  containerStyles,
  iconStyles,
  imageStyle,
  textStyles,
} from '~/styles/globalStyles';
import {colors} from '~/styles/colors';
import {assets} from '~/styles/app/assets';
import {borderRadius} from '~/styles/dimensions';

const STATUS_UNLIKED = 0;
const STATUS_LIKED = 1;
const STATUS_DISLIKED = 2;

interface Comment {
  name: string;
  avatar?: {uri: string};
  timestamp?: string;
  content?: string;
  like?: number;
  dislike?: number;
  rate: number;
  status?: number;
}
interface CommentCardProps {
  comments: Comment[];
  positionStyle?: StyleProp<ViewStyle>;
}
const CommentCard: React.FC<CommentCardProps> = ({comments, positionStyle}) => {
  const [statusLikes, setStatusLikes] = useState<number[]>(
    Array(comments.length).fill(STATUS_UNLIKED),
  );
  return (
    <View style={positionStyle}>
      {comments.map((comment, index) => (
        <View key={index} style={styles.containerItem}>
          <View style={containerStyles.containerRow}>
            <Image
              style={styles.avatar}
              source={
               assets.image.banner_demo
              }
            />
            <View style={containerStyles.container}>
              <Text style={styles.textName}>{comment.name}</Text>
              <Text style={styles.textTimetaps}>{comment.timestamp}</Text>
            </View>
            <View style={styles.containerRate}>
              <Image
                style={[iconStyles.icon16]}
                source={assets.icon.star_white}
              />
              <Text style={styles.textRate}>{comment.rate.toFixed(1)}</Text>
            </View>
          </View>
          <Text style={styles.textComment}>{comment.content}</Text>
          <View style={styles.foodter}>
            <TouchableOpacity
              onPress={() => {
                const updatedStatus = [...statusLikes];
                updatedStatus[index] =
                  updatedStatus[index] === STATUS_UNLIKED
                    ? STATUS_LIKED
                    : STATUS_UNLIKED;
                setStatusLikes(updatedStatus);
              }}>
              <Image
                style={iconStyles.icon20}
                source={
                  statusLikes[index] === STATUS_LIKED
                    ? assets.icon.like_true
                    : assets.icon.like_false
                }
              />
            </TouchableOpacity>
            <Text>{comment.like}</Text>
            <Text>|</Text>
            <TouchableOpacity onPress={() => {
                const updatedStatus = [...statusLikes];
                updatedStatus[index] =
                  updatedStatus[index] === STATUS_UNLIKED
                    ? STATUS_DISLIKED
                    : STATUS_UNLIKED;
                setStatusLikes(updatedStatus);
              }}>
              <Image
                style={iconStyles.icon20}
                source={
                  statusLikes[index] === STATUS_DISLIKED
                    ? assets.icon.dislike_true
                    : assets.icon.dislike_false
                }
              />
            </TouchableOpacity>
            <Text>{comment.dislike}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  containerItem: {
    ...containerStyles.card,
    elevation: 1,
  },
  containerRate: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    padding: 4,
    borderRadius: 4,
    backgroundColor: colors.primary500,
    gap: 2,
  },
  textName: {
    ...textStyles.h3,
    color: 'black',
  },
  textTimetaps: {
    ...textStyles.body_sm,
    color: colors.gray9E9E9E,
  },
  textRate: {
    ...textStyles.caption,
    color: 'white',
  },
  textComment: {
    ...textStyles.body_sm,
    color: 'black',
    marginVertical: 4,
  },
  avatar: {
    ...imageStyle.image40,
    borderRadius: borderRadius.max,
    marginRight: 8,
  },
  foodter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
});
