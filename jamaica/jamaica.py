import itertools

# 数字のリスト
numbers = [6, 3, 5, 1, 4]
target = 42

def evaluate_expression(nums, ops):
    expression = f"{nums[0]}{ops[0]}{nums[1]}{ops[1]}{nums[2]}{ops[2]}{nums[3]}{ops[3]}{nums[4]}"
    try:
        if eval(expression) == target:
            return expression
    except ZeroDivisionError:
        return None
    return None

operators = ['+', '-', '*', '/']

permutations_of_numbers = list(itertools.permutations(numbers))

product_of_operators = list(itertools.product(operators, repeat=4))

for nums in permutations_of_numbers:
    for ops in product_of_operators:
        result = evaluate_expression(nums, ops)
        if result:
            break
    if result:
        break

result if result else "No solution found"

print(result)
