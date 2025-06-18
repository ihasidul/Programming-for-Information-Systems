TITLE_BARS = 50

def get_multiples(multiples: list, limit: int) -> list:
    multiples_lst = []
    for number in range(1,limit):
        if any(number % m == 0 for m in multiples):
            multiples_lst.append(number)
        else:
            pass
    return multiples_lst

def ex1():
    """
    Exercise 1:
    Create a function and button which allows a user to enter baggage weight 
    and alerts them if the baggage exceeds the allowance of 15kg
    """
    
    weight = int(input("Provide the weight of the baggage in kg:"))
    if weight > 15:
        print("The baggage exceeds the allowance of 15kg")
    
def ex2():
    """
    Exercise 2:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000 and alert the user to the correct answer.
    """
    multiples_of = [3,5]
    all_multiples = get_multiples(multiples = multiples_of, limit = 1000)
    sum_of_multiples = sum(all_multiples)
    print(f"Sum of all the multiples of 3 or 5 below 1000 is {sum_of_multiples}")
    return True

def ex3():
    """
    Exercise 3, Functions:
    Take input for  a, b and n
    When the user clicks,
    Create a function to return the sum of all the multiples of a or b below n

    Call the function and alert the user to the correct answer when they press the button.
    """
    

def main():
    run_problem = int(input("Provide the problem number you want to run:"))
    if run_problem == 1:
        title = f"{'='*TITLE_BARS} \n Exercise {run_problem} \n{'='*TITLE_BARS}"
        print(title)
        ex1()
    elif run_problem == 2:
        title = f"{'='*TITLE_BARS} \n Exercise {run_problem} \n{'='*TITLE_BARS}"
        print(title)
        ex2()
    elif run_problem == 3:
        title = f"{'='*TITLE_BARS} \n Exercise {run_problem} \n{'='*TITLE_BARS}"
        print(title)
        ex3()
    else:
        print("Please provide a valid exercise numb er")


if __name__ == "__main__":
    main()