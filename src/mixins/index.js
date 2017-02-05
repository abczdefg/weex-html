export default {
  data() {
    return{
      certType: [{
          id: 1,
          name: '居民身份证'
        }, {
          id: 2,
          name: '军官证'
        }, {
          id: 3,
          name: '士兵证'
        }, {
          id: 4,
          name: '警官证'
        }, {
          id: 5,
          name: '港澳台居民身份证'
        }, {
          id: 6,
          name: '护照'
        }, {
          id: 7,
          name: '户口簿'
        }, {
          id: 99,
          name: '其他'
      }],
      djjg: [{name: '县级', tips: true},{id: '111', name: '县长', tips: false},{name: '镇级', tips: true},{id: '111', name: '镇长', tips: false}],
      xfcy: [{id: '112', name: '投诉', tips: false},{id: '111', name: '建议', tips: false}],
      xfmd: [{id: '115', name: '玩', tips: false},{id: '116', name: '吃', tips: false}]
    }
  },  
  methods: {
  	replace (to) {
  	  if (this.$router) {
  	    this.$router.replace(to)
  	  }
  	},
  	push (to) {
  	  if (this.$router) {
  	    this.$router.push(to)
  	  }
  	},
  	go (n) {
  	  if (this.$router) {
  	    this.$router.go(n)
  	  }
  	}
  }
}
