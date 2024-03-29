# Pair Programming


## Definition

Pair programming consists of two programmers sharing a single workstation (one screen, keyboard and mouse among the pair). The programmer at the keyboard is usually called the "driver", the other, also actively involved in the programming task but focusing more on overall direction is the "navigator"; it is expected that the programmers swap roles every few minutes or so.


## Also Known As

More simply "pairing"; the phrases "paired programming" and "programming in pairs" are also used, less frequently.


## Common Pitfalls

-   both programmers must be actively engaging with the task throughout a paired session, otherwise no benefit can be expected
-   a simplistic but often raised objection is that pairing "doubles costs"; that is a misconception based on equating programming with typing -- however, one should be aware that this is the worst-case outcome of poorly applied pairing
-   at least the driver, and possibly both programmers, are expected to keep up a running commentary; pair programming is also "programming out loud" -- if the driver is silent, the navigator should intervene
-   pair programming cannot be fruitfully forced upon people, especially if relationship issues, including the most mundane (such as personal hygiene), are getting in the way; solve these first!


## Origins

The names of various celebrities have been invoked in an attempt to imbue pair programming with an aura of necessity if not sanctity; anecdotes of John Von Neummann, Fred Brooks, Jerry Weinberg, Richard Gabriel or [Edsger Dijkstra](http://c2.com/cgi/wiki?DijkstraPairProgramming) using the practice are fascinating but sometimes hard to substantiate. However, the following timeline of verifiable sources does suggest that pair programming, in its modern form, has been around since well before the Agile movement:

-   1992: "Dynamic Duo" is the term coined by Larry Constantine, reporting on a visit to Whitesmiths Inc., a compiler vendor started by P.J. Plauger, one of the implementors of C: "At each terminal were two programmers! Of course, only one programmer was actually cutting code at each keyboard, but the others were peering over their shoulders." Whitesmiths existed from 1978 to 1988.
-   1993: "The benefits of collaboration for student programmers" by Wilson et al. is one early empirical study indicating benefits of pairing for programming tasks specifically. Posterior studies are more abundant and driven by the desire to "validate" pair programming after it had already gained popularity through [Extreme Programming](https://www.agilealliance.org/glossary/xp/).
-   1995: the pattern "Developing in Pairs" is given a brief description, in [Alexandrian](http://c2.com/cgi/wiki?AlexandrianForm) pattern form, in Jim Coplien's chapter "A Generative Development-Process Pattern Language" from the first patterns book, "Pattern Languages of Program Design".
-   1998: in "Chrysler goes to Extremes", the earliest article about Extreme Programming, pair programming is presented as one of the core practices of the C3 team; it is later described formally as one of XP's original "twelve practices"
-   2000: (or earlier) -- the roles of Driver and Navigator are introduced to help explain pair programming; the earliest known reference is a [mailing list posting](http://tech.groups.yahoo.com/group/extremeprogramming/message/12405); note however that the reality of these roles has been disputed, for instance Sallyann Bryant's article "[Pair programming and the mysterious role of the navigator](http://www.sciencedirect.com/science/article/pii/S1071581907000456)"
-   2002: "[Pair Programming Illuminated](http://www.amazon.com/dp/0201745763)", by Laurie Williams and Robert Kessler, is the first book devoted exclusively to the practice and discusses its theory, practice and the various studies up to that date
-   2003: an anonymous article on the C2 Wiki describes [Ping-Pong Programming](http://www.c2.com/cgi/wiki?PairProgrammingPingPongPattern), a moderately popular variant which marries pairing with test-driven development.
-   2015: James Coplien publishes [Two Heads are Better Than One](https://computingnow.computer.org/web/agile-careers/content?g=8504655&type=article&urlTitle=two-heads-are-better-than-one) which provides an overview of the history of Pair Programming that traces its origins back to the mid 1980's if not before.


## Skill Levels

As suggested above one of the major issues preventing effective pairing is passivity. When used simultaneously with [test-driven development](http://guide.agilealliance.org/guide/tdd.html), one variant called "ping-pong programming" encourages more frequent switching of roles: one programmer writes a failing unit test, then passes the keyboard to the other who writes the corresponding code, then goes on to a new test. This variant can be used purely for pedagogic purposes, or by already experienced programmers as a playful variant.

-   Beginner:
-   able to participate as navigator, in particular to intervene appropriately
-   able to participate as driver, in particular to explain code while writing it
-   Intermediate
-   can tell the right moment to give up the keyboard and switch roles
-   can tell the right moment to "steal" the keyboard and switch roles
-   Advanced
-   able to "drop in" when another pair has been working on a task and pick up the navigator role smoothly


## Signs Of Use

-   the room's furniture and workstations are set up so as to encourage pairing (in teams new or hostile to pairing, obvious mistakes are tolerated, such as desks with too little room for two chairs)
-   the room's noise level is controlled: the muted conversations from several simultanous pairs create a background hum but do not rise to the level where they would disturb anyone's work
-   if, on entering the room, you spot any programmer wearing an audio headset, take that as a "negative" sign -- not only is pairing probably not practiced in the team but the conditions for successful adoptions are likely not met


## Expected Benefits

-   increased code quality: "programming out loud" leads to clearer articulation of the complexities and hidden details in coding tasks, reducing the risk of error or going down blind alleys
-   better diffusion of knowledge among the team, in particular when a developer unfamiliar with a component is pairing with one who knows it much better
-   better transfer of skills, as junior developers pick up micro-techniques or broader skills from more experienced team members
-   large reduction in coordination efforts, since there are N/2 pairs to coordinate instead of N individual developers
-   improved resiliency of a pair to interruptions, compared to an individual developer: when one member of the pair must attend to an external prompt, the other can remains focused on the task and can assist in regaining focus afterwards


## Potential Costs

While empirical studies have yet to yield definite results on either benefits or costs, a commonly cited best-case estimate of 15% overhead is claimed for systematic pairing, relative to individual work; this overhead, it is claimed (again with some empirical support, though not entirely conclusive), is compensated by gains in code quality which usually entails significant maintenance penalties down the road.


## Academic Publications

Theoretical

-   Among the more interesting theoretical papers are those pursuing the ethnographic approach initiated among others by Sallyann Freudenberg (née Bryant), using close examination of programmers in their day-to-day work:
-   [How Pair Programming Really Works](http://www.scribd.com/doc/25304465/) surveys some of the work that has attacked the "driver/navigator" distinction

Empirical

-   [The Collaborative Software Process](http://collaboration.csc.ncsu.edu/laurie/Papers/dissertation.pdf), Laurie Williams' doctoral thesis, among the better known studies of the topic, reporting increased quality and no statistically significant cost overhead
-   [The effectiveness of pair programming: A meta-analysis](http://www.idi.ntnu.no/grupper/su/publ/ebse/R11-pairprog-hannay-ist09.pdf), surveying 18 major empirical studies, reporting increased quality and compressed schedules, but some cost overhead; schedule compression mainly for simpler tasks performed by junior developers, a situation which also correlates with lower quality
-   Most empirical studies (14 out of the above mentioned 18) suffer from one common flaw often cited as an obstacle to generalizing conclusions: they are conducted with "convenience samples" of graduate or undergraduate students rather than on professionals in realistic work conditions


Alliance, A. (2019, September 25). Pair Programming: Does It Really Work? Retrieved November 16, 2020, from https://www.agilealliance.org/glossary/pairing/
