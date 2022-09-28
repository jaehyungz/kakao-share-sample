/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {Button, StyleSheet, View, Share} from 'react-native';

import KakaoShareLink from 'react-native-kakao-share-link';

function App() {
  // const onShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message: 'https://www.lawdians.com/',
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     // alert(error.message);
  //     console.log(error);
  //   }
  // };

  const handleClick = async () => {
    console.log({KakaoShareLink});
    try {
      const response = await KakaoShareLink.sendCommerce({
        content: {
          title: 'title',
          imageUrl:
            'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
          link: {
            webUrl: 'https://developers.kakao.com/',
            mobileWebUrl: 'https://developers.kakao.com/',
          },
          description: 'description',
        },

        commerce: {
          regularPrice: 100000,
          discountPrice: 80000,
          discountRate: 20,
        },
        buttons: [
          {
            title: '앱에서 보기',
            link: {
              androidExecutionParams: [
                {key: 'key1', value: 'http://www.naver.com'},
              ],
              iosExecutionParams: [
                {key: 'key1', value: 'http://www.naver.com'},
                {key: 'key2', value: 'value2'},
              ],
            },
          },
          {
            title: '웹에서 보기',
            link: {
              webUrl: 'https://developers.kakao.com/',
              mobileWebUrl: 'https://developers.kakao.com/',
            },
          },
        ],
      });
      console.log(response);
    } catch (e) {
      console.error(e);
      console.error(e.message);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Share" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
