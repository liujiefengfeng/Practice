#!/usr/bin/env python
# encoding: utf-8


class Node(object):
    def __init__(self, layer_index, node_index):
        '''
        构造节点对象。
        layer_index:节点所在层的编号
        node_index:节点编号
        '''
        self.layer_index = layer_index
        self.node_index = node_index
        self.downstream = []
        self.upstream = []
        self.output = 0
        self.delta = 0

    def set_output(self, output):
        '''
        设置节点的输出值。节点属于输入层会用到此函数。
        '''
        self.output = output

    def append_downstream_connection(self, conn):
        '''
        添加一个到下游节点的连接。
        '''
        self.downstream.append(conn)

    def append_upstream_connection(self, conn):
        '''
        添加一个到上游节点的连接。
        '''
        self.upstream.append(conn)

    def calc_output(self):
        '''
        根据式一，计算节点输出
                     ->  ->
        y = sigmoid( w * x )
        '''
        output = reduce(
            lambda ret, conn: ret + conn.upstream_node.output * conn.weight,
            self.upstream,
            0)
        self.output = sigmoid(output)

    def calc_hidden_layer_delta(self, label):
        downstream_delta = reduce(
            lambda ret, conn: ret + conn.downstream_node.delta * conn.weight,
            self.downstream,
            0.0)
        self.delta = self.output(1 - self.output) * downstream_delta

    def calc_output_layer_delta(self, label):
        self.delta = self.output(1 - self.output)(label - self.output)

    def __str__(self):
        node_str = '%u-%u: output: %f delta: %f' % (self.layer_index, self.node_index, self.output, self.delta)
        downstream_str = reduce(
            lambda ret, conn: ret + '\n\t' + str(conn),
            self.downstream,
            '')
        upstream_str = reduce(
            lambda ret, conn: ret + '\n\t' + str(conn),
            self.upstream,
            '')
        return node_str + '\n\tdownstream: ' + downstream_str + '\n\tupstream: ' + upstream_str
