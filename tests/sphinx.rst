.. py:function:: spam(eggs)
                 ham(eggs)

   Less spam, more Perl.


.. py:function:: filterwarnings(action, message='', category=Warning, \
                                module='', lineno=0, append=False)
   :noindex:

The function :py:func:`spam` does a similar thing.



.. function:: pyfunc()

   Describes a Python function.

Reference to :func:`pyfunc`.



.. py:function:: send_message(sender, recipient, message_body, [priority=1])

   Send a message to a recipient

   :param str sender: The person sending the message
   :param str recipient: The recipient of the message
   :param str message_body: The body of the message
   :param priority: The priority of the message, can be a number 1-5
   :type priority: integer or None
   :return: the message id
   :rtype: int
   :raises ValueError: if the message_body exceeds 160 characters
   :raises TypeError: if the message_body is not a basestring


.. c:member:: PyObject* PyTypeObject.tp_bases


.. cpp:class:: template<typename T, std::size_t N> \
               std::array

.. cpp::class:: template<> \
                std::array<bool, 256>

.. cpp::class:: template<typename T> \
                std::array<T, 42>

.. cpp:function:: bool myMethod(int arg1, std::string arg2)


.. cpp:function:: bool myMethod(int, double)

   A function with unnamed parameters.

.. cpp:function:: const T &MyClass::operator[](std::size_t i) const

   An overload for the indexing operator.

.. cpp:function:: operator bool() const

   A casting operator.

.. cpp:function:: constexpr void foo(std::string &bar[2]) noexcept

   A constexpr function.

.. cpp:function:: MyClass::MyClass(const MyClass&) = default

   A copy constructor with default implementation.



.. js:function:: $.getJSON(href, callback[, errback])

   :param string href: An URI to the location of the resource.
   :param callback: Gets called with the object.
   :param errback:
       Gets called in case the request fails. And a lot of other
       text so we need multiple lines.
   :throws SomeError: For whatever reason in that case.
   :returns: Something.


.. js:class:: MyAnimal(name[, age])

   :param string name: The name of the animal
   :param number age: an optional age for the animal


.. rst:directive:: foo

   Foo description.

.. rst:directive:: .. bar:: baz

   Bar description.


.. rst:role:: foo

   Foo description.
