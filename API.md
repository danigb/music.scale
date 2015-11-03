## `find`

Find a scale name by notes

### Parameters

* `notes` **`String or Array`** the scale notes



Returns `String` the scale name


## `get`

Get a scale from a name. If the name contains the tonic, an array of notes
is returned. Otherwise an array of intervals is returned.

This function always return an array, even if its empty.

### Parameters

* `name` **`String`** the scale name


### Examples

```js
scale.get('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
scale.get('phrygian') // => ['1P', '2m', '3m', '4P', '5P', '6m', '7m']
```

Returns `Array` a list of notes or intervals (or empty array if scale not found)


## `names`

Get all available names

### Parameters

* `aliases` **`Boolean`** if true return aliases names


### Examples

```js
scale.names() // => ['major', ...]
```

Returns `Array` an array of scale names


## `pattern`

Create a melodic pattern using a scale and scale degrees list

The resulting array will contain the notes in the same order as degrees.
If a given degree is not present in the scale, the result will contain a
null in that position.

This function is currified so it can be partially applied.

### Parameters

* `degrees` **`Array or String`** the degrees numbers list
* `scale` **`Array or String`** the scale notes


### Examples

```js
// basic usage:
scale.pattern('1 3 5', 'C D E F G A B') // => [ 'C', 'E', 'G' ]
// order matters:
scale.pattern('1 5 2 6', 'C D E F G A B') // => [ 'C', 'G', 'D', 'A' ]
// not found degrees are null:
scale.pattern('1 2 6', 'C D E F G') // => [ 'C', 'D', null ]
// partially applied:
var pattern = scale.pattern('1 2 6 4 5')
pattern('C D E F G A B') // => ['C', 'D', 'A', 'F', 'G']
```

Returns `Array` the melodic pattern (or null if not present)


## `scale`

Build a scale from a source and a tonic. A scale is an array of notes (or
intervals if tonic is null) ordered by frequency

A source can be a list of intervals or notes. The tonic must be
a pitch (with or without octave) or null to get the scale intervals

This function is currified, so you can partially apply the function passing
one parameter instead of two (see example)

### Parameters

* `source` **`Array`** the list of intervals or notes
* `tonic` **`String`** the tonic of the scale


### Examples

```js
scale('1 2 3 5 6', 'G') // => ['G', 'A', 'B', 'D', 'E']
var dorian = scale('D E F G A B C')
dorian('C4') // => ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4']
```

Returns `Array` the list of notes


