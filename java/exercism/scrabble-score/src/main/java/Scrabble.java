import java.util.*;
import java.util.stream.IntStream;

class Scrabble
{
	public final Map<Character, Integer> TILE_VALUES = new HashMap<>();
	private final char[] word;
	private int[] tileMultiplier;

	private static <K,V> Map<K, V> addTileValue(Map<K, V> map, List<K> mapKeys, V value) {
		mapKeys.forEach(key -> map.put(key, value));
		return map;
	}

	Scrabble(String word, int[] tileMultiplier)
	{
		addTileValue(TILE_VALUES,Arrays.asList('A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'), 1);
		addTileValue(TILE_VALUES,Arrays.asList('D', 'G'), 2);
		addTileValue(TILE_VALUES,Arrays.asList('B', 'C', 'M', 'P'), 3);
		addTileValue(TILE_VALUES,Arrays.asList('F', 'H', 'V', 'W', 'Y'), 4);
		addTileValue(TILE_VALUES,Arrays.asList('K'), 5);
		addTileValue(TILE_VALUES,Arrays.asList('J', 'X'), 8);
		addTileValue(TILE_VALUES,Arrays.asList('Q', 'Z'), 10);

		assert word.length() == tileMultiplier.length;
		this.word = word.toUpperCase().toCharArray();
		this.tileMultiplier = tileMultiplier;
		System.out.println("word = " + Arrays.toString(this.word) + ", tileMultiplier = " + Arrays.toString(this.tileMultiplier));
	}


	Scrabble(String word)
	{
		this(word, IntStream.iterate(1, x -> 1)
		                    .limit(word.length())
		                    .toArray());
	}


	int getScore()
	{
		return IntStream.range(0, word.length)
		         .map(index -> TILE_VALUES.getOrDefault(word[index], 0) * tileMultiplier[index])
		         .sum();
	}

}