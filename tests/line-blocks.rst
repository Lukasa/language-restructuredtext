Unindented
==========

One line-block:

| Lorem     
| ipsum dolor
 sit amet,
|
| consectetur
  adipisicing elit,
| sed do eiusmod tempor.
|

Two line-blocks:

| This is a line block.
 It ends with a blank line.         
|     Each new line begins with a vertical bar ("|").
      Line breaks and initial indents are preserved.
| Continuation lines are wrapped portions of long lines;
  they begin with a space in place of the vertical bar.
|     The left edge of a continuation line need not be aligned with
      the left edge of the text above it.

|
| This is a second line block.
|
| Blank lines are permitted internally, but they must begin with a "|".
|


Indented
========

.. note:: One line-block:

   | Lorem     
   | ipsum dolor
    sit amet,
   |
   | consectetur
     adipisicing elit,
   | sed do eiusmod tempor.
   |

.. note:: Two line-blocks:

   | This is a line block.
    It ends with a blank line.         
   |     Each new line begins with a vertical bar ("|").
         Line breaks and initial indents are preserved.
   | Continuation lines are wrapped portions of long lines;
     they begin with a space in place of the vertical bar.
   |     The left edge of a continuation line need not be aligned with
         the left edge of the text above it.
   
   |
   | This is a second line block.
   |
   | Blank lines are permitted internally, but they must begin with a "|".
   |


Interruptions
=============

Unindented
----------

| Lorem     
| ipsum dolor
Interruption
| <- You should see a literal pipe here

| Lorem     
| ipsum dolor
|Interruption| (This line should contain a substitution reference)


Indented
--------

.. note::

   | Lorem     
   | ipsum dolor
   Interruption
   | <- You should see a literal pipe here

   | Lorem     
   | ipsum dolor
   |Interruption| (This line should contain a substitution reference)

.. note::

   | Lorem     
   | ipsum dolor
Interruption

   | Lorem     
   | ipsum dolor
| Interruption
 (This should be a separate line-block)
   


.. |Interruption| replace:: Interruption
