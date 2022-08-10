# React Glitch Image

### Allows display images with a glitch effect

```javascript
    <GlitchImage image="image.jpg"/>
```
## Very simple!
![](doc/preview.gif)



## Parameters to get complicated (props)!

| name               | default | description                                                                                                    |
|--------------------|---------|----------------------------------------------------------------------------------------------------------------|
| width              | 20      | If it is a number it will be used as rem, otherwise use string with unit type                                  |
| splitSize          | 8       | Number of divisions                                                                                            |
| animationInterval  | 4000    | Time interval to repeat animation (measured in ms)                                                             |
| animationDuration  | 400     | I really have to describe this (measured in ms)                                                                |
| variations         | [2, 3]  | Intensity of the effect of each layer                                                                          |
| inside             | false   | Defines if the effect is seen outside the container                                                            |
| activeFxOnInterval | true    | Activate the glitch effect in the animationInterval                                                            |
| activeFxOnHover    | true    | Activate the glitch effect on hover                                                                            |
| useCanvas          | true    | Layers real split by canvas, false to layers repeat by img position                                            |
| layerColors        | false   | Alternate colors in layer 2, better explained below                                                            |
| opacity            | 0.3     | Layer 2 opacity                                                                                                |
| filter             | true    | Activate aleatory hue-rotate filter value and brightness in layer 2                                            |
| brightness         | 2       | Brightness filter intensity                                                                                    |
| customFilter       | null    | Deactivate the previous filter for a more personalized filter                                                  |
| onActiveFx         | null    | This function is executed when the glitch effect is triggered by the interval, and sends the animationDuration |


## width
```javascript
- <GlitchImage image="image.jpg" width={18}/> // =18rem
- <GlitchImage image="image.jpg" width="50%"/> // =50%
- <GlitchImage image="image.jpg" width="300px"/> // =300px
```

## customFilter
This property receives normal filters for css property, 
however, you can specify a random value for each filter.
using `$<number>` you can indicate the maximum value that will be generated randomly.

### Example 1:
- `customFilter="invert($20%)"` 
- Generates a random value from 0 to 20

### Example 2:

- `customFilter=invert($100%) saturate(100%) hue-rotate($200deg) brightness(2)`
- This generates random values from 0 to 100 for invert, and from 0 to 200 for hue-rotate

### Note:
Every time the filter is activated using activeFxOnInterval,
this again generates random values for the customFilter,
each layer generate a different random

### layerColors:
- Receives an array of colors to alternate on each of the layers 2. Uses `true`, to set the default color array `["rgba(255,0,0,0.04)", "rgba(0,0,255,0.04)"]`

- This will create a sublayer of the color specified in layer 2, it is recommended to deactivate filter or use a customFilter to get a better and more personalized result.

- EXAMPLE

```javascript
    <GlitchImage
        image="image.jpg"
        customFilter="invert($20%) saturate($30%)"
        layerColors={["rgba(0,0,180,0.05)", "rgba(200,0,0,0.05)"]}
    />
```
![](doc/preview2.gif)
