# typescript-get-set

### Set & Get

When you want to create a getter and a setter function, you no longer need to do this. You can instead use keywords that are like built in methods for a particular thing. Check our example below:

```typescript
class Circle {
  private _radius: number

  constructor(radius) {
    this._radius = radius
  }

  set radius(radius) {
    if (radius > 0) {
      this._radius = radius
    } else {
      throw new Error('Cannot set a negative radius')
    }
  }

  get radius(): number {
    return this._radius
  }
}
```

We have a class of a Circle, that can intake a private \_radius. Keeping that variable private, we use the set and get key words that act as functions. But allow us to call them using dot notation, see below:

```typescript
const circle = new Circle(5)

console.log(circle.radius)

circle.radius = 6

console.log(circle.radius)
```

We're able to succesfully set a radius of our \_radius variable, and get. But nowhere in the code are we calling a getRadius() or setRadius() function. We're simply doing things to radius and Typescript is responding logically to the code as it's set up.
