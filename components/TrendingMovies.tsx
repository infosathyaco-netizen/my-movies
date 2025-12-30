import TrendingCard from "@/components/TrendingCard";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from 'react';
import { FlatList, View } from 'react-native';

const TrendingMovies = () => {
    const {
        data: movies
    } = useFetch(() => fetchMovies({
        query: ''
    }));

    return (

        <FlatList
            horizontal={true}
            className="mt-2"
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() =>
                <View className="w-4"></View>
            }
            data={movies} renderItem={({ item }) => (
                <TrendingCard
                    {...item}
                />
            )} />
    );
}
export default TrendingMovies;
