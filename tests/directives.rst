.. image:: /images/heart.png
   :alt: Alternate text
   :height: 11px
   :width: 11em
   :scale: 50 %
   :align: top
   :target: text

.. |H| image:: /images/heart.png
   :alt: Alternate text
   :height: 11px
   :width: 11em
   :scale: 50 %
   :align: top
   :target: text


The |biohazard| symbol must be used on containers used to
dispose of medical waste.

.. |biohazard| image:: biohazard.png


|Michael| and |Jon| are our widget-wranglers.

.. |Michael| user:: mjones
.. |Jon|     user:: jhl


|The Transparent Society| offers a fascinating alternate view
on privacy issues.

.. |The Transparent Society| book:: isbn=0738201448


4XSLT has the convenience method |runString|, so you don't
have to mess with DOM objects if all you want is the
transformed output.

.. |runString| function:: module=xml.xslt class=Processor


West led the |H| 3, covered by dummy's |H| Q, East's |H| K,
and trumped in hand with the |S| 2.

.. |H| image:: /images/heart.png
   :height: 11px
   :width: 11
.. |S| image:: /images/spade.png
   :height: 11
   :width: 11

* |Red light| means stop.
* |Green light| means go.
* |Yellow light| means go really fast.

.. |Red light|    image:: red_light.png
.. |Green light|  image:: green_light.png
.. |Yellow light| image:: yellow_light.png

|-><-| is the official symbol of POEE_.

.. |-><-| image:: discord.png
.. _POEE: http://www.poee.org/


Even |the text in Texas| is big.

.. |the text in Texas| style:: big


Welcome back, |name|!

.. |name| tal:: replace user/getUserName


|RST|_ is a little annoying to type over and over, especially
when writing about |RST| itself, and spelling out the
bicapitalized word |RST| every time isn't really necessary for
|RST| source readability.

.. |RST| replace:: reStructuredText
.. _RST: http://docutils.sourceforge.net/rst.html


But still, that's nothing compared to a name like
|j2ee-cas|__.

.. |j2ee-cas| replace::
   the Java `TM`:super: 2 Platform, Enterprise Edition Client
   Access Services
__ http://developer.java.sun.com/developer/earlyAccess/
   j2eecas/



.. figure:: picture.png
   :scale: 50 %
   :alt: map to buried treasure

   This is the caption of the figure (a simple paragraph).

   The legend consists of all elements after the caption.  In this
   case, the legend consists of this paragraph and the following
   table:

   +-----------------------+-----------------------+
   | Symbol                | Meaning               |
   +=======================+=======================+
   | .. image:: tent.png   | Campground            |
   +-----------------------+-----------------------+
   | .. image:: waves.png  | Lake                  |
   +-----------------------+-----------------------+
   | .. image:: peak.png   | Mountain              |
   +-----------------------+-----------------------+


.. math::
  (a + b)^2 = a^2 + 2ab + b^2

  (a - b)^2 = a^2 - 2ab + b^2
