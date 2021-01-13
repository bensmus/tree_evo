import random
import matplotlib.pyplot as plt


def random_spaced_hue(hue):
    """
    returns an random hue that is at least 40 degrees away 
    hue is between 0 and 360
    """

    return random.randint(hue + 40, hue + 40 + 280) % 360


# test the function
if __name__ == "__main__":
    y = [random_spaced_hue(100) for i in range(1000)]
    plt.scatter(range(len(y)), y)
    plt.show()
