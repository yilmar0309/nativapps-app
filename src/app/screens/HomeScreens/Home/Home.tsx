import {MovieEntity} from '@presenter/domain/entity/movie.entity';
import {MovieSlice} from '@presenter/io/movieSlice';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {Props, SliceMovie} from '../../../navigation/interfaceInject';

const Home: React.FC<Props & SliceMovie> = props => {
  const dispatch = useDispatch();
  const movieData = useSelector(({movie}: {movie: MovieSlice}) => movie.data);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAsyncData() {
      try {
        await dispatch(props.getAllMovieRedux);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('ERROR -> ', error);
      }
    }
    fetchAsyncData();
  }, []);

  const getItemCount = (data: MovieEntity[]) => data.length;

  const getItem = (data: any, index: number) => data[index];

  const onRefresh = async () => {
    setLoading(true);
    try {
      await dispatch(props.getAllMovieRedux);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('ERROR -> ', error);
    }
  };

  const renderItem = ({item}: ListRenderItemInfo<MovieEntity>) => (
    <View style={styles.item}>
      <View style={styles.boxText}>
        <Text style={styles.title}>
          imdbID:{' '}
          <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
            {item.imdbID}
          </Text>
        </Text>
        <Text style={styles.title}>
          Title:{' '}
          <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
            {item.Title}
          </Text>
        </Text>
        <Text style={styles.title}>
          Year:{' '}
          <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
            {item.Year}
          </Text>
        </Text>
        <Text style={styles.title}>
          Type:{' '}
          <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
            {item.Type}
          </Text>
        </Text>
      </View>
      <Image source={{uri: item.Poster}} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {!loading ? (
        <VirtualizedList
          data={movieData}
          renderItem={renderItem}
          keyExtractor={item => item.imdbID}
          getItemCount={getItemCount}
          getItem={getItem}
          style={styles.list}
          onRefresh={onRefresh}
          refreshing={loading}
        />
      ) : (
        <ActivityIndicator
          color="black"
          size={40}
          style={styles.activityIndicator}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#aaa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  boxText: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 14,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  activityIndicator: {
    marginTop: 12,
  },
});
