>>> print("I upgraded from Python 2\n" +
...       "and all I got were these\n" +
...       "lousy parentheses")
I upgraded from Python 2
and all I got were these
lousy parentheses
>>> import sys
>>> print(' "%s" ' % sys.ps1); \
... print(' "%s" ' % sys.ps2)
 ">>> " 
 "... " 


.. note:: Indented doctest

   >>> print("Get a dog up ya")
   Get a dog up ya
   >>> import sys
   >>> print('" %s" ' % sys.ps1); \
   ... print('" %s" ' % sys.ps2)
   " >>> " 
   " ... " 
   >>> exit()
... Interrupted
