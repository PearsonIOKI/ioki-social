"""
Template for unittests
"""
import unittest


class TestFail(unittest.TestCase):

    def setUp(self):
        """
        Setup for unittest
        """

    def test_fail(self):
        self.assertFalse(False)


if __name__ == '__main__':
    unittest.main()
