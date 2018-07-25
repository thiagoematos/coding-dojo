const max_min_matrix = require('./max_min_matrix');
const testUtil = require('./testUtil');

testUtil.AssertArray({
    msg: "given an empty matrix then result is an empty matrix",
    ft: max_min_matrix.calc,
    params: [],
    expected: []
});

testUtil.AssertArray({
    msg: "given an [1,2,3,4,5] matrix then result is [1,5]",
    ft: max_min_matrix.calc,
    params: [1, 2, 3, 4, 5],
    expected: [1, 5]
});

testUtil.AssertArray({
    msg: "given an [1,1] matrix then result is [1,1]",
    ft: max_min_matrix.calc,
    params: [1, 1],
    expected: [1, 1]
});

testUtil.AssertArray({
    msg: "given an [1] matrix then result is [1,1]",
    ft: max_min_matrix.calc,
    params: [1],
    expected: [1, 1]
});

testUtil.AssertArray({
    msg: "given an [-10, 5, 0, 10] matrix then result is [-10,10]",
    ft: max_min_matrix.calc,
    params: [-10, 5, 0, 10],
    expected: [-10, 10]
});

testUtil.AssertArray({
    msg: "given an [[1,2], [3,4], [5,6]] matrix then result is [1, 6]",
    ft: max_min_matrix.calc,
    params: [
        [1, 2],
        [3, 4],
        [5, 6]
    ],
    expected: [1, 6]
});