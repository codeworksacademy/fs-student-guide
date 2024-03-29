# CSharp Data Types

### Value Types, Reference Types, and Pointer Types

In CSharp, these data types are categorized based on how they store their value in the memory. CSharp includes the following categories of data types:

1.  Value type
2.  Reference type
3.  Pointer type

## Value Type

A data type is a value type if it holds a data value within its own memory space. It means the variables of these data types directly contain values.

>TIP: All the value types derive from *System.ValueType*, which in-turn, derives from *System.Object*.

For example, consider integer variable `int i = 100;`

The system stores 100 in the memory space allocated for the variable `i`. The following image illustrates how 100 is stored at some hypothetical location in the memory (0x239110) for 'i':

[![Memory Allocation of Value Type Variable](https://www.tutorialsteacher.com/Content/images/csharp/value-type-memory-allocation.png)](https://www.tutorialsteacher.com/Content/images/csharp/value-type-memory-allocation.png)

The following data types are all of value type:

- bool
- byte
- char
- decimal
- double
- enum
- float
- int
- long
- sbyte
- short
- struct
- uint
- ulong
- ushort


### Passing Value Type Variables

When you pass a value-type variable from one method to another, the system creates a separate copy of a variable in another method. If value got changed in the one method, it wouldn't affect the variable in another method.

Example: Passing Value Type Variables

```csharp
static void ChangeValue(int x)
{
    x =  200;

    Console.WriteLine(x); // 200
}

static void Main(string[] args)
{
    int i = 100;

    Console.WriteLine(i); // 100

    ChangeValue(i);

    Console.WriteLine(i); // 100
}

```

In the above example, variable `i` in the `Main()` method remains unchanged even after we pass it to the `ChangeValue()` method and change it's value there.

## Reference Type

Unlike value types, a reference type doesn't store its value directly. Instead, it stores the address where the value is being stored. In other words, a reference type contains a pointer to another memory location that holds the data.

For example, consider the following string variable:

`string s = "Hello World!!";`

The following image shows how the system allocates the memory for the above string variable.

[![Memory Allocation of Reference Type Variable](https://www.tutorialsteacher.com/Content/images/csharp/raference-type-memory-allocation.png)](https://www.tutorialsteacher.com/Content/images/csharp/raference-type-memory-allocation.png)

As you can see in the above image, the system selects a random location in memory `(0x803200)` for the variable `s`. The value of a variable `s` is `0x600000`, which is the memory address of the actual data value. Thus, reference type stores the address of the location where the actual value is stored instead of the value itself.

The followings are reference type data types:

- String
- Arrays
- Class
- Delegate

### Passing Reference Type Variables

When you pass a reference type variable from one method to another, it doesn't create a new copy; instead, it passes the variable's address. So, If we change the value of a variable in a method, it will also be reflected in the calling method.

Example: Passing Reference Type Variable

```csharp
static void ChangeReferenceType(Student std2)
{
    std2.StudentName = "Steve";
}

static void Main(string[] args)
{
    Student std1 = new Student();
    std1.StudentName = "Bill";

    ChangeReferenceType(std1);

    Console.WriteLine(std1.StudentName);
}

```
Output: `Steve`

In the above example, we pass the `Student` object `std1` to the `ChangeReferenceType()` method. Here, it actually pass the memory address of `std1`. Thus, when the `ChangeReferenceType()` method changes `StudentName`, it is actually changing `StudentName` of `std1` object, because `std1` and `std2` are both pointing to the same address in memory.

## Null

The default value of a reference type variable is `null` when they are not initialized. `Null` means not refering to any object.

[![Null Reference Type](https://www.tutorialsteacher.com/Content/images/csharp/null.png)](https://www.tutorialsteacher.com/Content/images/csharp/null.png)

A value type variable cannot be null because it holds value, not a memory address. CSharp 2.0 introduced [nullable types](https://www.tutorialsteacher.com/csharp/csharp-nullable-types), using which you can assign null to a value type variable or declare a value type variable without assigning a value to it.


TutorialsTeacher. (2020). Value Type and Reference Type. Retrieved November 12, 2020, from https://www.tutorialsteacher.com/csharp/csharp-value-type-and-reference-type

## Pointer Types
A pointer type declaration takes one of the following forms:

CSharp

```csharp
type* identifier;
void* identifier; //allowed but not recommended
```
The type specified before the * in a pointer type is called the referent type. Only an unmanaged type can be a referent type.

Pointer types do not inherit from object and no conversions exist between pointer types and object. Also, boxing and unboxing do not support pointers. However, you can convert between different pointer types and between pointer types and integral types.

When you declare multiple pointers in the same declaration, the asterisk (*) is written together with the underlying type only; it is not used as a prefix to each pointer name. For example:

CSharp

```csharp
int* p1, p2, p3;   // Ok
int *p1, *p2, *p3;   // Invalid in CSharp
```
A pointer cannot point to a reference or to a struct that contains references, because an object reference can be garbage collected even if a pointer is pointing to it. The garbage collector does not keep track of whether an object is being pointed to by any pointer types.