(function(){
	var self=this;
	
	// self = SPEC
	
	self.describe('Syntax - Arrays',function() {
		
		self.test("trailing commas",function() {
			var ary = [1,2,3];
			self.ok((ary[0] == 1) && (ary[2] == 3) && (ary.length == 3));
			
			return ary = [
				1,2,3,
				4,5,6,
				7,8,9
			];
			
			// really?
			// (sum = (sum or 0) + n) for n in ary
			// a = [((x) -> x), ((x) -> x * x)]
			// ok a:length is 2
		});
		
		// Splats in Array Literals
		
		self.test("array splat expansions with assignments",function() {
			var nums = [1,2,3];
			var list = [].concat([0], [].slice.call(nums), [4]);
			return self.eq([0,1,2,3,4],list);
		});
		
		self.test("mixed shorthand objects in array lists",function() {
			var ary = [
				{a: 1},
				'b',
				{c: 1}
			];
			self.ok(ary.length == 3);
			self.ok(ary[2].c == 1);
			
			ary = [{b: 1,a: 2},100];
			self.eq(ary[1],100);
			
			ary = [{a: 0,b: 1},(1 + 1)];
			self.eq(ary[1],2);
			
			ary = [{a: 1},'a',{b: 1},'b'];
			self.eq(ary.length,4);
			self.eq(ary[2].b,1);
			return self.eq(ary[3],'b');
		});
		
		
		return self.test("array splats with nested arrays",function() {
			var nonce = {};
			var a = [nonce];
			var list = [].concat([1,2], [].slice.call(a));
			self.eq(list[0],1);
			self.eq(list[2],nonce);
			
			a = [[nonce]];
			list = [].concat([1,2], [].slice.call(a));
			return self.eq(list,[1,2,[nonce]]);
		});
	});

})()