.. A comment

Paragraph.

.. A comment
   block.

Paragraph.

..
   A comment consisting of multiple lines
   starting on the line after the
   explicit markup start.

.. A comment.
.. Another.

Paragraph.

.. A comment
no blank line

Paragraph.

.. A comment.
.. Another.
no blank line

Paragraph.

.. A comment::

Paragraph.

..
   comment::

The extra newline before the comment text prevents
the parser from recognizing a directive.

..
   _comment: http://example.org

The extra newline before the comment text prevents
the parser from recognizing a hyperlink target.

..
   [comment] Not a citation.

The extra newline before the comment text prevents
the parser from recognizing a citation.

..
   |comment| image:: bogus.png

The extra newline before the comment text prevents
the parser from recognizing a substitution definition.

.. Next is an empty comment, which serves to end this comment and
   prevents the following block quote being swallowed up.

..

    A block quote.

term 1
  definition 1

  .. a comment

term 2
  definition 2

term 1
  definition 1

.. a comment

term 2
  definition 2

+ bullet paragraph 1

  bullet paragraph 2

  .. comment between bullet paragraphs 2 and 3

  bullet paragraph 3

+ bullet paragraph 1

  .. comment between bullet paragraphs 1 (leader) and 2

  bullet paragraph 2

+ bullet

  .. trailing comment
