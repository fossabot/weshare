describe('LocalJiy', function () {
    var LocalJiy;

    beforeEach(module('starter.services'));

    beforeEach(inject(function (_LocalJiy_) {
        LocalJiy = _LocalJiy_;
    }));

    it('can update a jiy', function () {
        LocalJiy.append({
            guid: 'test',
            text: 'test'
        }, function (data) {

        });

        LocalJiy.update({
            guid: 'test',
            text: 'updated',
            weibo: {
                publishTime: '2015-5-5'
            }
        }, function (data) {

        });

        // expect(LocalJiy.fetchAsArray()).toEqual([{
        //     guid: 'test',
        //     text: 'updated',
        //     weibo: {
        //         publishTime: '2015-5-5'
        //     }
        // }]);
    });
});