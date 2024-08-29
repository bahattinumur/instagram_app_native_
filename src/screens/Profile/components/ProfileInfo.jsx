import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileInfo() {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A34B']}>
        <Image
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
          style={styles.avatar}
        />
      </LinearGradient>
      <View style={styles.stats}>
        <Text style={styles.statLabel}>0,000</Text>
        <Text style={styles.statNumber}>Posts</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statLabel}>0,000</Text>
        <Text style={styles.statNumber}>Followers</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statLabel}>0,000</Text>
        <Text style={styles.statNumber}>Following</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cover: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {width: 80, height: 80, borderRadius: 40},
  stats: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
  },
  statNumber: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },
});
