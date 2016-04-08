//: Playground - noun: a place where people can play
// navigation http://www.jianshu.com/users/d9259bf41bc7/latest_articles
// origin of this file http://www.jianshu.com/p/adc0be1a1e23

import UIKit

var str = "Hello, playground"

////基本类型

var myVariable = 42
myVariable = 50
let myConstant = 42

let implicitInteger = 70
let implicitDouble = 70.0
let explicitDouble: Double = 70

// 显式转换
let label = "the width hengheng "
let width = 94
let widthLabel = label + String(width)

//可选 optional
let optionalInt: Int? = 9

//强制展开运算符（!）
let actualInt: Int = optionalInt!

//类型转换
var myString = "3"
var possibleInt = Int(myString)
print(possibleInt)

myString = "banana"
possibleInt = Int(myString)
print(possibleInt)


//数组
var ratingList = ["Poor","Fine","Good","Excellent"]
ratingList[1] = "OK"
ratingList

// 创建空数组.
let emptyArray = [String]()


////控制流

let number = 23
if number < 10 {
    print("The number is small")
} else if number > 100 {
    print("The number is pretty big")
} else {
    print("The number is between 10 and 100")
}

let individualScores = [75,43,103,87,12]
var teamScore = 0
for score in individualScores {
    if score > 50 {
        teamScore += 3
    } else {
        teamScore += 1
    }
}
print(teamScore)

var optionalName: String? = "JIefeng"
var greeting = "Hello!"
if let name = optionalName {
    greeting = "Hello, \(name)"
}

let name = optionalName //nil 值被展开 赋值给了 name
print(name)

var optionalHello: String? = "Hello"
if let hello = optionalHello where hello.hasPrefix("H"), let name = optionalName {
    greeting = "\(hello), \(name)"
}

// switch
let vegetable = "watercress"
switch vegetable {
case "celery" :  //不用break，执行完一个case之后，退出switch
    print("Add some raisins and make ants on a log.")
case "cucumber", "watercress":  //逗号分割的多个条件, 有一个条件满足就会执行
    print("That would make a good tea sandwich.")
case let x where x.hasSuffix("pepper"):
    print("Is it a spicy \(x)?")
default:  //一定要有 default
    print("Everything tastes good in soup.")
}

// 半闭区间运算符 ( ..< )
var firstForLoop = 0
for i in 0..<4 {
    firstForLoop += i
}
print(firstForLoop)

// 闭区间运算符(...)
var secondForLoop = 0
for _ in 0...4 {
    secondForLoop += 1
}
print(secondForLoop)


////函数和方法
func greet(name:String, day:String) -> String {
    return "Hello \(name), today is \(day)."
}
greet("Anna", day: "Tuesday")
greet("Bob", day: "Friday")
greet("Charlie", day: "a nice day")

//使用点语法调用方法。当调用的时候，可以不写第一个参数名，但是后面参数需要写。例如，Array 的方法有两个参数，但是只写了第二个参数名：
var array = ["apple", "banana", "dragonfruit"]
array.insert("cherry", atIndex: 2)
array
