import { Link } from "expo-router";
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

interface TrendingCardProps {
  id: number;
  poster_path: string;
}

const TrendingCard = ({ id, poster_path }: TrendingCardProps) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-32">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
