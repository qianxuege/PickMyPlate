import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DishCardProps {
  name: string;
  summary: string;
  price: string;
  spiceLevel: number;
  onPress?: () => void;
  isFavorited?: boolean;
  onHeartPress?: () => void;
}

export function DishCard({ name, summary, price, spiceLevel, onPress, isFavorited, onHeartPress }: DishCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.thumbnail} />
      <View style={styles.content}>
        <View style={styles.row1}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <TouchableOpacity
            onPress={onHeartPress}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            style={styles.heartButton}
          >
            <Ionicons
              name={isFavorited ? 'heart' : 'heart-outline'}
              size={20}
              color={isFavorited ? '#000' : '#374151'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.spiceRow}>
            {[0, 1, 2].map((level) => (
              <Ionicons
                key={level}
                name="flame"
                size={12}
                color={level < spiceLevel ? '#000' : '#9ca3af'}
                style={level < spiceLevel ? styles.spiceFilled : undefined}
              />
            ))}
          </View>
        </View>
        <Text style={styles.summary} numberOfLines={1}>
          {summary}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 12,
    flexDirection: 'row',
    gap: 12,
  },
  thumbnail: {
    width: 64,
    height: 64,
    backgroundColor: '#e5e7eb',
  },
  content: {
    flex: 1,
    gap: 4,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  heartButton: {
    padding: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    flex: 1,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  spiceRow: {
    flexDirection: 'row',
    gap: 4,
  },
  spiceFilled: {
    opacity: 1,
  },
  summary: {
    fontSize: 14,
    color: '#374151',
  },
});
