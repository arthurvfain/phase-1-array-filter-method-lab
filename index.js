function findMatching(arr, name)
{
    return arr.filter(apple => apple.toUpperCase() === name.toUpperCase());
}
function fuzzyMatch(arr, name)
{
    return arr.filter(apple => [...apple][0]=== [...name][0]);
}
function matchName(arr,dName)
{
    return arr.filter(apple => apple.name.toUpperCase() === dName.toUpperCase());
}