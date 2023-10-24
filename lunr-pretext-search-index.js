var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "sec_1_1_multiplication",
  "level": "1",
  "url": "sec_1_1_multiplication.html",
  "type": "Section",
  "number": "1.1",
  "title": "Multiplication Principle",
  "body": " Multiplication Principle   Suppose you just bought three new pairs of socks and a pair of shoes. With the socks and shoes you already have, you have a total of four pairs of socks and three pairs of shoes. How many different combinations of socks and shoes can you create?   Table 1. Sock and Shoe Combinations    Shoe\\Sock  Sock 1  Sock 2  Sock 3  Sock 4    Shoe 1  Sock 1 with Shoe 1  Sock 2 with Shoe 1  Sock 3 with Shoe 1  Sock 4 with Shoe 1    Shoe 2  Sock 1 with Shoe 2  Sock 2 with Shoe 2  Sock 3 with Shoe 2  Sock 4 with Shoe 2    Shoe 3  Sock 1 with Shoe 3  Sock 2 with Shoe 3  Sock 3 with Shoe 3  Sock 4 with Shoe 3      Multiplication Principle   If there are possibilities of choices of , and possibilities of choices of , then there are possibilities of choices of and .      Your friend suggests you hang all your records up on your wall. You have 4 rock, and 2 heavy metal, 3 pop, and 2 classical. Suppose you want to hang one of each genre. How many different choices do you have to put up on your wall?           Suppose you have been given the job to assign your soccer team of five players, jersey numbers. You have numbers 1-9. Since no two players can wear the same number, how many possible choices are there?       This previews our next section on Permutations.      Examples    Let's look back at our first example with the socks and shoes. Suppose you were just gifted a whole new wardrobe. You now have 12 pairs of socks, 6 pairs of shoes, 10 shirts, and 8 pairs of pants. How many different outfits can you wear?           You just bought a new lock for your locker. It requires 4 characters. However, the first two are letters and the second two are digits. How many different password combinations are there? What if no repeats are allowed?     possible password combinations.   possible password combinations.     "
},
{
  "id": "table-1",
  "level": "2",
  "url": "sec_1_1_multiplication.html#table-1",
  "type": "Table",
  "number": "1.1.1",
  "title": "Table 1. Sock and Shoe Combinations",
  "body": " Table 1. Sock and Shoe Combinations    Shoe\\Sock  Sock 1  Sock 2  Sock 3  Sock 4    Shoe 1  Sock 1 with Shoe 1  Sock 2 with Shoe 1  Sock 3 with Shoe 1  Sock 4 with Shoe 1    Shoe 2  Sock 1 with Shoe 2  Sock 2 with Shoe 2  Sock 3 with Shoe 2  Sock 4 with Shoe 2    Shoe 3  Sock 1 with Shoe 3  Sock 2 with Shoe 3  Sock 3 with Shoe 3  Sock 4 with Shoe 3    "
},
{
  "id": "multiplication_principle",
  "level": "2",
  "url": "sec_1_1_multiplication.html#multiplication_principle",
  "type": "Principle",
  "number": "1.1.2",
  "title": "Multiplication Principle.",
  "body": " Multiplication Principle   If there are possibilities of choices of , and possibilities of choices of , then there are possibilities of choices of and .   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec_1_1_multiplication.html#example-1",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Your friend suggests you hang all your records up on your wall. You have 4 rock, and 2 heavy metal, 3 pop, and 2 classical. Suppose you want to hang one of each genre. How many different choices do you have to put up on your wall?        "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec_1_1_multiplication.html#example-2",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  Suppose you have been given the job to assign your soccer team of five players, jersey numbers. You have numbers 1-9. Since no two players can wear the same number, how many possible choices are there?       This previews our next section on Permutations.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec_1_1_multiplication.html#example-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Let's look back at our first example with the socks and shoes. Suppose you were just gifted a whole new wardrobe. You now have 12 pairs of socks, 6 pairs of shoes, 10 shirts, and 8 pairs of pants. How many different outfits can you wear?        "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec_1_1_multiplication.html#example-4",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  You just bought a new lock for your locker. It requires 4 characters. However, the first two are letters and the second two are digits. How many different password combinations are there? What if no repeats are allowed?     possible password combinations.   possible password combinations.   "
},
{
  "id": "sec_1_2_permutations",
  "level": "1",
  "url": "sec_1_2_permutations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Permutations",
  "body": " Permutations   Imagine you are listening to your top 5 favorite song playlist on a shuffle mode where no song repeats before the end of the playlist. Since each song has a random chance of playing at the start, there are 5 choices to choose from. Once that song is finished we now have only 4 options to choose from. As each song ends, there becomes one less option to choose from. Each complete listen through of these songs is what is called a permutation of the playtlist. If you have taken a statistics class before, this may look similar to sampling without replacement. This is because as each song ends, we are not putting it back in the population to potentially be replayed (resampled) again.  Permutation - a specific ordering of elements within a set.   A structured exercise  Let's look at the set .   How many permutations of set A can you create?   There are 6 permutations. , and .   Without writing them all down, does there seem to be another way to figure out how many permutations there will be of a set?   Another way to find the amount of permutations a set will contain is to calculate where is the number of elements within that set.      Why does it make sense to use factorials to determine the amount of permutations of a set? Let's think back to the multiplication principle and how that would be applied to the playlist example. When we begin the playlist we start with 5 options and once the song ends we go down to 4; to find all of the possibilities of songs for just these two we would do . After the second songs ends we then have 3 songs to choose from. We can then take the 20 potential possibilities from the first two songs and multiply them by 3 to get the total amount of combinations for 3 songs. We can continue this trend until we get down to the last remaining song. What we would find is that we end up computing which is equal to .  What would happen if we had a set with 4 elements but we wanted the amount of permutations of 2 elements within that set?  A structured exercise  Let's now look at the set .   How many permutations of set B with length 2 can you create?   There are 12 permutations. and    Can you come up with a general formula that can be used to find permutations in examples like this?   Let's look at part a, . How did we get the parts of the quotient?   The general formula for this type of situation is     Examples    Disc golf is a sport that contains of three types of frisbees: drivers, midranges, and putters. Some disc golfer's bag contains 6 drivers, 5 midranges, and 3 putters.    How many permutations of this bag can you make?   There are permutations of this bag which is equivalent to     This disc golfer's friend challenges him to play a hole with three random discs from his bag in the order in which he picks them. How many permuations could the friend make?   There are which is equivalent to      "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "sec_1_2_permutations.html#definition-1",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "Permutation - a specific ordering of elements within a set. "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec_1_2_permutations.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "A structured exercise.",
  "body": "A structured exercise  Let's look at the set .   How many permutations of set A can you create?   There are 6 permutations. , and .   Without writing them all down, does there seem to be another way to figure out how many permutations there will be of a set?   Another way to find the amount of permutations a set will contain is to calculate where is the number of elements within that set.     "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec_1_2_permutations.html#exercise-2",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "A structured exercise.",
  "body": "A structured exercise  Let's now look at the set .   How many permutations of set B with length 2 can you create?   There are 12 permutations. and    Can you come up with a general formula that can be used to find permutations in examples like this?   Let's look at part a, . How did we get the parts of the quotient?   The general formula for this type of situation is   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec_1_2_permutations.html#exercise-3",
  "type": "Exercise",
  "number": "1.2.1.1",
  "title": "",
  "body": " How many permutations of this bag can you make?   There are permutations of this bag which is equivalent to   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec_1_2_permutations.html#exercise-4",
  "type": "Exercise",
  "number": "1.2.1.2",
  "title": "",
  "body": " This disc golfer's friend challenges him to play a hole with three random discs from his bag in the order in which he picks them. How many permuations could the friend make?   There are which is equivalent to   "
},
{
  "id": "sec_1_3_combinations",
  "level": "1",
  "url": "sec_1_3_combinations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Combinations",
  "body": " Combinations   In the previous section, Permutations, order mattered. However, in Combinations, order does not matter.     How many different ways can we combine 3 elements of the set ?     . There are 4 different ways to arrange them.  Since order does not matter, . Keep this in mind as we introduce some formulas.     In Example 1, we are choosing 3 elements from a set with 4 elements. If we are dealing with larger sets, listing out all possibilities would take too long. Instead, we can use the following defintion.   We define for by,     where is the number of things we can choose from, and is the number of things we want to choose. We read this as “n choose r.”   This is called the Binomial Coefficient. Why? We’ll find out later. First, let’s put this into practice on the next example.     Suppose you’re in a class full of 21 students and the teacher asks you to help her with a task. You need to find four other classmates to help. How many different groups can you form?     .  We have 20 classmates ( ), and we choose four ( ) of them.     Let's use what we've learned in Sections 1.1 and 1.2 to solve the next example.     Imagine the colors in a candy bag are equally distributed. There is red, blue, green, and orange. If there was a way to differentiate between candies of the same color, how many different combinations of two candies of each other can we have if there are 64 total candies?     candies of each color.   .     Here's a useful fact:     Let's think about why this is the case. Consider objects in a box. Let 1 of the objects be red and the rest, objects, be blue. Therefore, there are two possibilities, we pick the red object or we pick no red objects. If we pick the red object, this can be done in ways and we can pick the rest of the objects ways. Hence, . If we pick no red objects, this can be done in ways. Since these are mutually exclusive, we have the above identity.    Back to this Binomial Coefficient we mentioned earlier. It is an important piece of the Binomial Theorem.   Binomial Theorem      Think about this in expanding powers of sums.     Expand        Imagine we are choosing our value. We can choose it 0 times, which leaves us with only one way to do this, hence the coefficient is 1. We can choose one , which there are two ways to do this, hence the coefficient is 2. Similarly, we can choose two , which there is only one way, and the coefficient is 1.     Examples    Suppose we want to form a student-athlete committee at the university. We want this committee to representative of all sports, therefore, we pick two persons from each sport. There are 6 eligible baseball players, 12 eligible soccer players, 5 eligible football players, and 7 eligible lacrosse players. How many different committees can be formed?           Expand , where . Then, try when .             This is Pascal's triangle.   \"File:Pascal's triangle 5.svg\" by User:Conrad.Irwin originally User:Drini is licensed under CC BY-SA 3.0.  What do you notice?  Refer back to the previous example. What would it be when ? ?    "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec_1_3_combinations.html#example-5",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  How many different ways can we combine 3 elements of the set ?     . There are 4 different ways to arrange them.  Since order does not matter, . Keep this in mind as we introduce some formulas.   "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "sec_1_3_combinations.html#definition-2",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": " We define for by,     where is the number of things we can choose from, and is the number of things we want to choose. We read this as “n choose r.”  "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec_1_3_combinations.html#example-6",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Suppose you’re in a class full of 21 students and the teacher asks you to help her with a task. You need to find four other classmates to help. How many different groups can you form?     .  We have 20 classmates ( ), and we choose four ( ) of them.   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec_1_3_combinations.html#example-7",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Imagine the colors in a candy bag are equally distributed. There is red, blue, green, and orange. If there was a way to differentiate between candies of the same color, how many different combinations of two candies of each other can we have if there are 64 total candies?     candies of each color.   .   "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "sec_1_3_combinations.html#theorem-1",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "Binomial Theorem.",
  "body": " Binomial Theorem     "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec_1_3_combinations.html#example-8",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Expand        Imagine we are choosing our value. We can choose it 0 times, which leaves us with only one way to do this, hence the coefficient is 1. We can choose one , which there are two ways to do this, hence the coefficient is 2. Similarly, we can choose two , which there is only one way, and the coefficient is 1.   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec_1_3_combinations.html#example-9",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  Suppose we want to form a student-athlete committee at the university. We want this committee to representative of all sports, therefore, we pick two persons from each sport. There are 6 eligible baseball players, 12 eligible soccer players, 5 eligible football players, and 7 eligible lacrosse players. How many different committees can be formed?        "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec_1_3_combinations.html#example-10",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Expand , where . Then, try when .           "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec_1_3_combinations.html#remark-1",
  "type": "Remark",
  "number": "1.3.3",
  "title": "",
  "body": " This is Pascal's triangle.   \"File:Pascal's triangle 5.svg\" by User:Conrad.Irwin originally User:Drini is licensed under CC BY-SA 3.0.  What do you notice?  Refer back to the previous example. What would it be when ? ?  "
},
{
  "id": "sec_2_1_bayesian_frequentist",
  "level": "1",
  "url": "sec_2_1_bayesian_frequentist.html",
  "type": "Section",
  "number": "2.1",
  "title": "Bayesian and Frequentist",
  "body": " Bayesian and Frequentist   There are two types of interpretations of probability, Bayesian and Frequentist. Before we dive into them, let’s first find out which side of this debate you might be on.     Suppose you roll a fair six-sided dice. What’s the probability that it is a six?    If we look at this problem from both sides, a Bayesian might say, the probability is 1 in 6, about 16.7%. However, a Frequentist would counter and say they don’t know the answer, but they know it is either a six or it is not, either 100% or 0% a six.  Which one do you agree with?     Bayesian   The Bayesian perspective uses prior beliefs to help shape the probability of an event. Bayesians use known information to help predict the unknown likelihood of an event. This is a continual process of updating beliefs based on new information given. It helps us find the probability of events that can only be done once. Let’s look at this in action in Bayes Theorem.    Bayes' Theorem       This is read as “A given B,” where B is the information we have been given, and A is our known belief, or probability, of B. This new probability, P(A|B), is the probability we wish to find. We’ll go more into detail on this later.    Bayesian is sometimes referred to as the “subjective” interpretation of probability because opinions are used to find the probability of an event. However, Bayesian and Frequentist are both subjective. We can use probability to predict the outcome an event, but we never are completely certain.     Frequentist   The Frequentist perspective uses repeated trials of an event to help find the “true” probability. If we repeat or simulate an event multiple times, we can reach it. We can do 10, 100, or 1,000 trials and find the distribution of those outcomes to find this probability. The philosophy of the frequentist perspective coincides with the Law of Large Numbers. If we repeat an experiment a large number of times and find the average, this value will be our expected value. If we conducted an experiment infinitely many times, we would reach this true probability we mentioned earlier.     So...which one is correct? Better?   Neither is correct or better, but instead, they are two different ways of thinking and approaching probability. However, it can be said that one is more applicable than the other. Bayesian is more applicable when you are computing the probability of events that cannot be repeated over and over, like a sports game or an election. However, if we want to find out the probability of rolling a dice or flipping a coin, it makes sense to use a Frequentist perspective because these are events that can realistically be repeated over and over again. Nevertheless, it is entirely up to the person to decide which perspective to use, which one you may think is better in the situation.    Decide what the probability of each event would be better modeled by  (a) prob. of having a disease  (b) prob of heads twice in a row  (c) prob. of hand in poker  (d) prob. it rains    (a) Bayesian  (b) Frequentist  (c) Frequentist  (d) Bayesian   Bonus!  The probability a sports team wins may be Bayesian, but the coin toss can be thought of as Frequentist!        Simulation   This is where simulations come into play. We can use a computer to simulate and perform an event as many times as we want. Then, we can use this data to help us find the probability of said event.    "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec_2_1_bayesian_frequentist.html#example-11",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": "  Suppose you roll a fair six-sided dice. What’s the probability that it is a six?    If we look at this problem from both sides, a Bayesian might say, the probability is 1 in 6, about 16.7%. However, a Frequentist would counter and say they don’t know the answer, but they know it is either a six or it is not, either 100% or 0% a six.  Which one do you agree with?   "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "sec_2_1_bayesian_frequentist.html#theorem-2",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "Bayes’ Theorem.",
  "body": " Bayes' Theorem     "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec_2_1_bayesian_frequentist.html#remark-2",
  "type": "Remark",
  "number": "2.1.3",
  "title": "",
  "body": " This is read as “A given B,” where B is the information we have been given, and A is our known belief, or probability, of B. This new probability, P(A|B), is the probability we wish to find. We’ll go more into detail on this later.  "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec_2_1_bayesian_frequentist.html#example-12",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "  Decide what the probability of each event would be better modeled by  (a) prob. of having a disease  (b) prob of heads twice in a row  (c) prob. of hand in poker  (d) prob. it rains    (a) Bayesian  (b) Frequentist  (c) Frequentist  (d) Bayesian   Bonus!  The probability a sports team wins may be Bayesian, but the coin toss can be thought of as Frequentist!    "
},
{
  "id": "sec_2_2_axioms",
  "level": "1",
  "url": "sec_2_2_axioms.html",
  "type": "Section",
  "number": "2.2",
  "title": "Axioms of Probability",
  "body": " Axioms of Probability  Intro!  "
},
{
  "id": "sec_2_3_simulation",
  "level": "1",
  "url": "sec_2_3_simulation.html",
  "type": "Section",
  "number": "2.3",
  "title": "Simulation",
  "body": " Simulation   So far, we have been able to calculate probabilities in two ways. The first is counting the size of an event, and dividing by the size of the sample space, under the assumption that each singleton event is equally likely. The second is to argue from the axioms of theorems of probability. Sometimes, it can be difficult, if not impossible, to calculate a probability using the the aforementioned techniques. Also, for students and experts alike, mistakes in calculating a probability can easily occur. Being able to arrive at an approximation of a probability by running experiments is an essential tool for analyzing probabilities.  A simulation can be done without a computer. For example, if you want to know the probability seeing at least one five when you roll four six-sided dice simultaneously, you could roll four dice many times, and count the number of times you see a five on at least one dice. An estimate for the probability will be the number of times you see at least one five divided by the number of times you rolled the four dice. If the mathematical model of probability matches our collective intuition of what probability is, then we should expect that as the number of rolls of four dice gets larger and larger, the estimated probability should approach the \"true\" probability.  That said, the idea of taking a day or two to just roll dice sounds a little tedious. Instead, we will have a computer roll the dice for us, so to speak. Let's just say getting computers to generate numbers that behave like random rolls of the dice has been studied and engineered, so we will just take advantage of that.  For our work, we will use Sage, which is an open-source computer algebra system. In the online version of this book, you can execute and manipulate the code live.    Sage Tutorial  A general outline of the simulation process is as follows:  Simulation Process  Create a list of random numbers  Apply a function or functions to the list to answer whether the experiment is a success (return 1) or a failure (return 0)  Once you can successfully run one trial of an experiment, run the experiment many times, recording the numbers of successes and failures to calculate the estimated probability  To go above and beyond, estimate the probability many times to get a sense of how much each estimate varies from simulation to simulation    In the following examples, we will see this process in action and introduce some useful functions in Sage that can help us to simulate probabilities.   Probability of Rolling a Five  What is the probability of rolling a five on a six-sided dice? We know that the answer is 1\/6, but can we get the computer to arrive at this result? To do this, we will roll a lot of virtual dice! Note, Sage counts from 0, so our \"computer dice\" has numbers 0,1,2,3,4,5 instead of 1,2,3,4,5,6. We will correct for this by adding one to each random number.  Let's begin by rolling just once dice. The following code rolls one six-sided \"computer dice.\" It does this by defining a function called roll_d6(). This function, when called, generates a number between zero and five via the randrange(5) command, then adds one to get a number between one and six. The thrid line calls the function, effectively rolling the \"computer dice.\" In the online version of the text, execute the command below multiple times and see that the output can change.   We can take this a step further. Why roll one dice when we can roll many at once? This is step one of the simulation process. The following notation gives a list (named rolls) of 100 six-sided dice rolls.   Before we move on, see if you can modify the above code to roll 50 20-sided dice.  So far, we have been able to roll many dice, but we still don't know the probability of rolling a five. We need a function that will tell us when we've rolled a five (success), and when we haven't (failure). This is step two of the simulation process. By assigning the value one to success and the value zero to failure, we can count the number of successes by adding up the numbers in the list! We define this function next. Test it to make sure it behaves as expected.   Now, we just need to apply the is_five() function to every element in our list, and add up the list to tell us the total number of successes. This is step three of the simulation process.   Awesome! We now have a way to estimate the probability of rolling a five on a six-sided dice. Notice that we have a process that can be executed many times (try running the cell above many times and see that the output changes). We could create a function that executes the above process, and run that function many times (we'll do it 50 times)! This is step four of the simulation process.  Finally, rather than looking at all the estimates as a list of numbers, we can visualize the list of estimates with a histogram.    Probability of Rolling a Five in Four Rolls  What is the probability of rolling a five in four rolls of fair dice? We will modify the code from to arrive at an approximation of the answer, all while following the simulation process.  Before we write code, let's think about what we ary trying to do. We want to define \"success\" (return 1) to be that we roll a five in four rolls of fair dice. While \"failure\" (return 0) is that we do not roll a five in four rolls of fair dice.  The following code rolls four fair \"computer dice.\" This is step one of the simulation process.   We can apply our indicator function is_five to each roll in this list. Then, the sum of the list can be either 0,1,2,3, or 4. If the sum is zero, that must mean there are no fives, which is a failure, while if the sum is positive, it means that at least one roll was a five, which is a success. We can write a function, is_positive(), to help us distinguish success from failure in this case. Run the code below to see the result of an experiment of rolling four dice, and seeing if at least one of the dice is a five. This is step two of the simulation process. Run it several times to see that sometimes the experiment \"succeeds\" and sometimes the experiment \"fails.\"   Now, we move to step 3 of the simulation process. The following code let's us run the experiment many times by making the process from the previous code block a function in its own right, then running that function multiple times. The probability estimate is then the number of successes divided by the number of experiments run.     "
},
{
  "id": "example_sim_rolling_a_five",
  "level": "2",
  "url": "sec_2_3_simulation.html#example_sim_rolling_a_five",
  "type": "Example",
  "number": "2.3.1",
  "title": "Probability of Rolling a Five.",
  "body": " Probability of Rolling a Five  What is the probability of rolling a five on a six-sided dice? We know that the answer is 1\/6, but can we get the computer to arrive at this result? To do this, we will roll a lot of virtual dice! Note, Sage counts from 0, so our \"computer dice\" has numbers 0,1,2,3,4,5 instead of 1,2,3,4,5,6. We will correct for this by adding one to each random number.  Let's begin by rolling just once dice. The following code rolls one six-sided \"computer dice.\" It does this by defining a function called roll_d6(). This function, when called, generates a number between zero and five via the randrange(5) command, then adds one to get a number between one and six. The thrid line calls the function, effectively rolling the \"computer dice.\" In the online version of the text, execute the command below multiple times and see that the output can change.   We can take this a step further. Why roll one dice when we can roll many at once? This is step one of the simulation process. The following notation gives a list (named rolls) of 100 six-sided dice rolls.   Before we move on, see if you can modify the above code to roll 50 20-sided dice.  So far, we have been able to roll many dice, but we still don't know the probability of rolling a five. We need a function that will tell us when we've rolled a five (success), and when we haven't (failure). This is step two of the simulation process. By assigning the value one to success and the value zero to failure, we can count the number of successes by adding up the numbers in the list! We define this function next. Test it to make sure it behaves as expected.   Now, we just need to apply the is_five() function to every element in our list, and add up the list to tell us the total number of successes. This is step three of the simulation process.   Awesome! We now have a way to estimate the probability of rolling a five on a six-sided dice. Notice that we have a process that can be executed many times (try running the cell above many times and see that the output changes). We could create a function that executes the above process, and run that function many times (we'll do it 50 times)! This is step four of the simulation process.  Finally, rather than looking at all the estimates as a list of numbers, we can visualize the list of estimates with a histogram.  "
},
{
  "id": "example_sim_rolling_a_five_four_rolls",
  "level": "2",
  "url": "sec_2_3_simulation.html#example_sim_rolling_a_five_four_rolls",
  "type": "Example",
  "number": "2.3.2",
  "title": "Probability of Rolling a Five in Four Rolls.",
  "body": " Probability of Rolling a Five in Four Rolls  What is the probability of rolling a five in four rolls of fair dice? We will modify the code from to arrive at an approximation of the answer, all while following the simulation process.  Before we write code, let's think about what we ary trying to do. We want to define \"success\" (return 1) to be that we roll a five in four rolls of fair dice. While \"failure\" (return 0) is that we do not roll a five in four rolls of fair dice.  The following code rolls four fair \"computer dice.\" This is step one of the simulation process.   We can apply our indicator function is_five to each roll in this list. Then, the sum of the list can be either 0,1,2,3, or 4. If the sum is zero, that must mean there are no fives, which is a failure, while if the sum is positive, it means that at least one roll was a five, which is a success. We can write a function, is_positive(), to help us distinguish success from failure in this case. Run the code below to see the result of an experiment of rolling four dice, and seeing if at least one of the dice is a five. This is step two of the simulation process. Run it several times to see that sometimes the experiment \"succeeds\" and sometimes the experiment \"fails.\"   Now, we move to step 3 of the simulation process. The following code let's us run the experiment many times by making the process from the previous code block a function in its own right, then running that function multiple times. The probability estimate is then the number of successes divided by the number of experiments run.   "
},
{
  "id": "sec_2_4_conditional_prob_bayes_thm",
  "level": "1",
  "url": "sec_2_4_conditional_prob_bayes_thm.html",
  "type": "Section",
  "number": "2.4",
  "title": "Conditional Probability",
  "body": " Conditional Probability   We mentioned this idea earlier about updating our beliefs based on new information. This was the Bayesian perspective of thinking...but what does this actually mean? What does it look like?     Suppose we go to the carnival and play a game. We have 3 cups, one of which has a coin under them. We are given two chances to guess. Imagine we get the first guess wrong, what's the probability we get it right on the next guess?    The probability we pick correctly on our first guess is 1 in 3, about 33%. If we take away a cup, we now have a 50\/50 chance of guessing correctly, so our odds increase to 50%. This is what conditional probability is all about. We are given new information (in this example we guessed incorrectly) and update our beliefs.     Law of Total Probability  If is a partition of the sample space , then for any event we have        Bayes Theorem  So what is the Law of Total Probability useful for? It goes hand in hand with the theorem we introduced in Section 2.1, Bayes Theorem. Everytime we use this formulam, we are using the law. First, we'll provide a useful definition and then prove this theorem before diving into some examples.        The probability of two events, and happening is . Thus, But also, Therefore, If we divide both sides by we get . Bayes Theorem!  Let's put this formula into action on the next example.     Suppose we roll a fair twice. The first roll is a one. What is the probability we roll snake eyes on the second roll?    We are looking for the probability of rolling a one, given we already rolled a one. We will define as the first roll being a one and as the second roll is a one. . Thus,   Why? This is because these are independent events. The first dice roll has no effect on the second, third, fourth, etc. This is a helpful realization as we continue through conditional probability.      Consider a study of 63 college students and if they live off campus.   Table 1. College Housing and Year      1st Year  2nd Year  3rd Year  4th Year    No  1  5  8  13    Yes  15  11  7  3      What is the probability a student is a 3rd year, given they live off campus?        Base Rate Fallacy  A common problem in conditional probability is the Base Rate Fallacy. This is where the base rate or initial probability of an event leads to misinterpretation of the probability of a specific situation of an event. We will look a common example.    Let be a rare disease that only .1% of the population has (base rate). The test has a 3% false positive rate and 6% false negative rate. The test comes back positive. What’s the probability you have the disease?       We must use the Law of Total Probability to compute   Thus, Therefore, is 0.3%.       Consider a class with a grading scale of A, B, and F. There are 36 students in the class. The first test, 21% received an A, 63% a B, and 16% an F. Of those, %1 of those who got an A ended up failing the class, 11% with a B failed, and 45% with an F failed.  Given a student failed, what is the probability they got a B on the first test?         Using Multiplication Trees  Another way to solve Conditional Probability is to use Multiplication Trees. Consider the next example.    Consider two boxes, each with red and blue marbles in them. Box #1 is 53% blue marbles, and Box #2 is 88% blue marbles. Suppose we flip a coin to decide which box to choose a marble from. What is the probability we pick a red marble, given the coin landed on heads? Furthermore, what's the probability of getting a red marble?  Use a multiplication tree!        "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#example-15",
  "type": "Example",
  "number": "2.4.1",
  "title": "",
  "body": "  Suppose we go to the carnival and play a game. We have 3 cups, one of which has a coin under them. We are given two chances to guess. Imagine we get the first guess wrong, what's the probability we get it right on the next guess?    The probability we pick correctly on our first guess is 1 in 3, about 33%. If we take away a cup, we now have a 50\/50 chance of guessing correctly, so our odds increase to 50%. This is what conditional probability is all about. We are given new information (in this example we guessed incorrectly) and update our beliefs.   "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#theorem-3",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "Law of Total Probability.",
  "body": " Law of Total Probability  If is a partition of the sample space , then for any event we have   "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#theorem-4",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "",
  "body": "  "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#definition-3",
  "type": "Definition",
  "number": "2.4.4",
  "title": "",
  "body": "  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#example-16",
  "type": "Example",
  "number": "2.4.5",
  "title": "",
  "body": "  Suppose we roll a fair twice. The first roll is a one. What is the probability we roll snake eyes on the second roll?    We are looking for the probability of rolling a one, given we already rolled a one. We will define as the first roll being a one and as the second roll is a one. . Thus,   Why? This is because these are independent events. The first dice roll has no effect on the second, third, fourth, etc. This is a helpful realization as we continue through conditional probability.   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#example-17",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  Consider a study of 63 college students and if they live off campus.   Table 1. College Housing and Year      1st Year  2nd Year  3rd Year  4th Year    No  1  5  8  13    Yes  15  11  7  3      What is the probability a student is a 3rd year, given they live off campus?       "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#example-18",
  "type": "Example",
  "number": "2.4.8",
  "title": "",
  "body": "  Let be a rare disease that only .1% of the population has (base rate). The test has a 3% false positive rate and 6% false negative rate. The test comes back positive. What’s the probability you have the disease?       We must use the Law of Total Probability to compute   Thus, Therefore, is 0.3%.   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#example-19",
  "type": "Example",
  "number": "2.4.9",
  "title": "",
  "body": "  Consider a class with a grading scale of A, B, and F. There are 36 students in the class. The first test, 21% received an A, 63% a B, and 16% an F. Of those, %1 of those who got an A ended up failing the class, 11% with a B failed, and 45% with an F failed.  Given a student failed, what is the probability they got a B on the first test?        "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec_2_4_conditional_prob_bayes_thm.html#example-20",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": "  Consider two boxes, each with red and blue marbles in them. Box #1 is 53% blue marbles, and Box #2 is 88% blue marbles. Suppose we flip a coin to decide which box to choose a marble from. What is the probability we pick a red marble, given the coin landed on heads? Furthermore, what's the probability of getting a red marble?  Use a multiplication tree!      "
},
{
  "id": "sec_2_5_independence",
  "level": "1",
  "url": "sec_2_5_independence.html",
  "type": "Section",
  "number": "2.5",
  "title": "Independence",
  "body": " Independence  Look at the formal definition of the word independence. Think about this definition and its meaning in mathematics.   Not depending on something else for strength or effectiveness; freestanding   How do you think this relates to probability?    Suppose you roll a fair six-sided dice and it’s a four. Will this affect your next roll? Are you more likely to get a four? Less likely?    The first roll should not affect the second roll. We should be equally like to get a four on the second roll as we did the first. This is because these are two independent events.     Two events and are independent if    To relate back the example we had earlier, think of the first roll as ‘Event A’ and the second as ‘Event B’.  In the previous section we talked about conditional probability. The probability of some event given some event . If events are independent, since one does not affect the other, we can define the conditional probability Furthermore,   Note that this is not a definition for independence. The probability of “ given ” is not the converse of “ given .”  Refer back to the previous example on Section 2.4. The probability of getting snake eyes, given we already rolled a one, is equal to the probability of just rolling a one.    Suppose is the event you roll an even number and is the event you roll a four. Are these events independent?     . Not independent!     How do you think the formal definition of independence would extend to three independent events A, B, and C?      It is also true that if three events are independent, for any combination of two events, independence still holds such that           "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "sec_2_5_independence.html#definition-4",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": " Not depending on something else for strength or effectiveness; freestanding  "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec_2_5_independence.html#example-21",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "  Suppose you roll a fair six-sided dice and it’s a four. Will this affect your next roll? Are you more likely to get a four? Less likely?    The first roll should not affect the second roll. We should be equally like to get a four on the second roll as we did the first. This is because these are two independent events.   "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "sec_2_5_independence.html#definition-5",
  "type": "Definition",
  "number": "2.5.3",
  "title": "",
  "body": " Two events and are independent if   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec_2_5_independence.html#example-22",
  "type": "Example",
  "number": "2.5.4",
  "title": "",
  "body": "  Suppose is the event you roll an even number and is the event you roll a four. Are these events independent?     . Not independent!   "
},
{
  "id": "sec_3_1_discrete_random_variables",
  "level": "1",
  "url": "sec_3_1_discrete_random_variables.html",
  "type": "Section",
  "number": "3.1",
  "title": "Discrete Random Variables",
  "body": " Discrete Random Variables   introduction   "
},
{
  "id": "sec_3_9_projects",
  "level": "1",
  "url": "sec_3_9_projects.html",
  "type": "Section",
  "number": "3.2",
  "title": "Projects with Discrete Random Variables",
  "body": " Projects with Discrete Random Variables   Shiny Hunting in Pokemon  In the Pokemon games, players are tasked with catching and training digital monsters called Pokemon. People of all ages love these games for many different reasons. Some like to battle, some like to trade, while others like to search out and catch rare Pokemon. Some of the rarest Pokemon are shiny Pokemon, which are Pokemon with an alternate color scheme as compared to the usual monster.  Trying to find   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
