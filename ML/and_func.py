#!/usr/bin/env python
# encoding: utf-8


from perceptron import Perceptron


def f(x):
    return 1 if x > 0 else 0

def get_training_dataset():
    input_vecs = [[1, 1], [0, 0], [1, 0], [0, 1]]
    labels = [1, 0, 0, 0]
    return input_vecs, labels

def train_and_perceptron():
    '''
    使用and真值表训练感知器
    '''
    # 创建感知器，输入参数为2（因为and是2元函数），激活函数是f
    p = Perceptron(2, f)
    # 训练，迭代10轮，学习速率为0.1
    input_vecs, labels = get_training_dataset()
    p.train(input_vecs, labels, 10, 0.1)
    # 返回训练好的感知器
    return p

if __name__ == '__main__':
    and_perception = train_and_perceptron()
    print and_perception
    print '1 and 1 = %d' % and_perception.predict([1, 1])
    print '1 and 1 = %d' % and_perception.predict([1, 0])
    print '1 and 1 = %d' % and_perception.predict([0, 0])
    print '1 and 1 = %d' % and_perception.predict([0, 1])
