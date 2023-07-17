import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Feather'

export default function NewMemory() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>memories</Text>
      <Link href="/new" asChild>
        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
          <Icon name="arrow-left" size={16} color="#FFF" />
        </TouchableOpacity>
      </Link>
    </View>
  )
}
