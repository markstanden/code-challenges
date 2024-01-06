import random
import string


class Robot:

    # current_robots holds a list of the current in production robots
    current_robots: list[str] = []

    def __init__(self):
        # Each new robot is assigned a new random name for identification purposes.
        self.new_name()

    def reset(self):
        """
        reset gets a new name for the robot instance.
        reset removes the current name from the current robot list,
        reset also adds the new name to the current robot list.
        """
        old_name = self.name
        self.new_name()

        if old_name in self.current_robots:
            self.current_robots.remove(old_name)

        self.current_robots.append(self.name)

    def new_name(self):
        """new_name assigns a new name to the robot instance"""
        # Create a new random name and assign to our robot instance
        self.name: str = self.generate_name()

        # Check if the created name is in the robot list,
        # if so try again, until it is unique.
        while self.name in self.current_robots:
            self.name: str = self.generate_name()
        self.current_robots.append(self.name)

    def generate_name(self) -> str:
        """
        generate_name creates a new random name from
        two random characters and three random numbers
        """
        # Create the random name components
        prefix: str = ""
        for _ in range(0,2):
            prefix += random.choice(string.ascii_letters)
        number = random.randint(0, 999)

        # The robot name needs to the the two characters,
        # in uppercase, followed by a three digit number
        return f"{prefix.upper()}{number:03d}"
