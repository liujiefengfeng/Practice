#!/usr/bin/env python
# encoding: utf-8


class Perceptron(object):

    def __init__(self, input_num, activator):
        '''
        初始化感知器，设置输入参数的个数，以及激活函数
        激活函数的类型为 double -> double
        '''
        self.activator = activator
        self.weights = [0.0 for _ in range(input_num)]
        self.bias = 0.0

    def __str__(self):
        '''
        打印学习到的权重和偏置项
        '''
        return 'weights\t:%s\nbias\t:%f\n' % (self.weights, self.bias)

    def predict(self, input_vec):
        '''
        输入向量，输出感知器的计算结果
        '''
        return self.activator(
            reduce(
                lambda a, b: a + b,
                map(
                    lambda (x, w): x * w,
                    zip(input_vec, self.weights)),
                0.0) + self.bias)

    def train(self, input_vecs, labels, iteration, rate):
        '''
        输入训练数据：输入x向量组，对应的y数组，迭代轮数，学习速率
        '''
        for i in range(iteration):
            self._one_iteration(input_vecs, labels, rate)

    def _one_iteration(self, input_vecs, labels, rate):
        '''
        一次迭代，训练所有的输入数据
        '''
        # 将输入向量组x与对应的y打包起来:[(input_vec, label),... ]
        samples = zip(input_vecs, labels)
        # 每个训练样本，按照感知器规则更新权重和偏置项
        for (input_vec, label) in samples:
            # 每个输入，根据当前的权重和偏置项计算输出
            output = self.predict(input_vec)
            # 更新权重和输出
            self._update_weights(input_vec, output, label, rate)

    def _update_weights(self, input_vec, output, label, rate):
        '''
        按照感知器规则更新权重和偏置项
        '''
        # 感知器规则：
        # W(i) = W(i) + ^W(i); ^W(i) = rate * (delta) * X(i)
        # b = b + ^b; ^b = rate * (delta)

        # 计算实际值label和计算值output之间的差
        delta = label - output
        # 将输入向量input_vec = [x1, x2, ...]和当前权重向量weights = [w1, w2, ...]
        # 打包成: [(x1, w1), (x2, w2), ...]
        # 根据规则更新权重向量w
        self.weights = map(
            lambda (x, w): w + rate * delta * x,
            zip(input_vec, self.weights))
        # 根据规则更新偏置项b
        self.bias += rate * delta
