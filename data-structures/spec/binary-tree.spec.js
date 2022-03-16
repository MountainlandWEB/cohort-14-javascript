describe('BinarySearchTree', () => {
    let binarySearchTree;
    beforeEach(() => {
      binarySearchTree = new BinarySearchTree();
    });
  
    describe('insert', () => {
      it('should contain the element with key 5 when the element is inserted', () => {
        const element = {
          key: 5,
        };
        binarySearchTree.insert(element);
        const foundElement = binarySearchTree.find(element.key);
        expect(foundElement.key).toEqual(element.key);
      });
  
      it('should contain the elements with keys 8, 3, 10, 1, 9 when the elements is inserted', () => {
        const element1 = {
          key: 8,
        };
        const element2 = {
          key: 3,
        };
        const element3 = {
          key: 10,
        };
        const element4 = {
          key: 1,
        };
        const element5 = {
          key: 9,
        };
        binarySearchTree.insert(element1);
        binarySearchTree.insert(element2);
        binarySearchTree.insert(element3);
        binarySearchTree.insert(element4);
        binarySearchTree.insert(element5);
        const foundElement1 = binarySearchTree.find(element1.key);
        expect(foundElement1.key).toEqual(element1.key);
        const foundElement2 = binarySearchTree.find(element2.key);
        expect(foundElement2.key).toEqual(element2.key);
        const foundElement3 = binarySearchTree.find(element3.key);
        expect(foundElement3.key).toEqual(element3.key);
        const foundElement4 = binarySearchTree.find(element4.key);
        expect(foundElement4.key).toEqual(element4.key);
        const foundElement5 = binarySearchTree.find(element5.key);
        expect(foundElement5.key).toEqual(element5.key);
      });
  
      it('should increment the size when elements are inserted', () => {
        const element1 = {
          key: 5,
        };
        const element2 = {
          key: 10,
        };
        expect(binarySearchTree.size).toEqual(0);
        binarySearchTree.insert(element1);
        expect(binarySearchTree.size).toEqual(1);
        binarySearchTree.insert(element2);
        expect(binarySearchTree.size).toEqual(2);
      });
    });
  
    // describe('remove', () => {
    //   it('should remove the element with key 5 when the elements 5, 10, 14 are inserted and 5 is removed', () => {
    //     const element1 = {
    //       key: 5,
    //     };
    //     const element2 = {
    //       key: 10,
    //     };
    //     const element3 = {
    //       key: 14,
    //     };
    //     binarySearchTree.insert(element1);
    //     binarySearchTree.insert(element2);
    //     binarySearchTree.insert(element3);
    //     binarySearchTree.remove(element1.key);
    //     expect(binarySearchTree.find(element1.key)).toEqual(null);
    //   });
    //   it('should remove the element with key 10 when the elements 5, 10, 14 are inserted and 10 is removed', () => {
    //     const element1 = {
    //       key: 5,
    //     };
    //     const element2 = {
    //       key: 10,
    //     };
    //     const element3 = {
    //       key: 14,
    //     };
    //     binarySearchTree.insert(element1);
    //     binarySearchTree.insert(element2);
    //     binarySearchTree.insert(element3);
    //     binarySearchTree.remove(element2.key);
    //     expect(binarySearchTree.find(element2.key)).toEqual(null);
    //   });
    //   it('should remove the element with key 14 when the elements 5, 10, 14 are inserted and 14 is removed', () => {
    //     const element1 = {
    //       key: 5,
    //     };
    //     const element2 = {
    //       key: 10,
    //     };
    //     const element3 = {
    //       key: 14,
    //     };
    //     binarySearchTree.insert(element1);
    //     binarySearchTree.insert(element2);
    //     binarySearchTree.insert(element3);
    //     binarySearchTree.remove(element3.key);
    //     expect(binarySearchTree.find(element3.key)).toEqual(null);
    //   });
    //   it('should decrement the size when elements are removed', () => {
    //     const element1 = {
    //       key: 5,
    //     };
    //     const element2 = {
    //       key: 10,
    //     };
    //     const element3 = {
    //       key: 14,
    //     };
    //     expect(binarySearchTree.size).toEqual(0);
    //     binarySearchTree.insert(element1);
    //     binarySearchTree.insert(element2);
    //     binarySearchTree.insert(element3);
    //     expect(binarySearchTree.size).toEqual(3);
    //     binarySearchTree.remove(element1.key);
    //     expect(binarySearchTree.size).toEqual(2);
    //     binarySearchTree.remove(element2.key);
    //     expect(binarySearchTree.size).toEqual(1);
    //     binarySearchTree.remove(element3.key);
    //     expect(binarySearchTree.size).toEqual(0);
    //   });
    // });
  
    describe('find', () => {
      it('should return the element with key 5 when the elements 5, 10, 14 are inserted', () => {
        const element1 = {
          key: 5,
        };
        const element2 = {
          key: 10,
        };
        const element3 = {
          key: 14,
        };
        binarySearchTree.insert(element1);
        binarySearchTree.insert(element2);
        binarySearchTree.insert(element3);
        const foundElement1 = binarySearchTree.find(element1.key);
        expect(foundElement1.key).toEqual(element1.key);
      });
      it('should return the element with key 10 when the elements 5, 10, 14 are inserted', () => {
        const element1 = {
          key: 5,
        };
        const element2 = {
          key: 10,
        };
        const element3 = {
          key: 14,
        };
        binarySearchTree.insert(element1);
        binarySearchTree.insert(element2);
        binarySearchTree.insert(element3);
        const foundElement2 = binarySearchTree.find(element2.key);
        expect(foundElement2.key).toEqual(element2.key);
      });
      it('should return the element with key 14 when the elements 5, 10, 14 are inserted', () => {
        const element1 = {
          key: 5,
        };
        const element2 = {
          key: 10,
        };
        const element3 = {
          key: 14,
        };
        binarySearchTree.insert(element1);
        binarySearchTree.insert(element2);
        binarySearchTree.insert(element3);
        const foundElement3 = binarySearchTree.find(element3.key);
        expect(foundElement3.key).toEqual(element3.key);
      });
      it('should return null when the element with key 20 is searched for and only elements 5, 10, 14 are inserted', () => {
        const element1 = {
          key: 5,
        };
        const element2 = {
          key: 10,
        };
        const element3 = {
          key: 14,
        };
        binarySearchTree.insert(element1);
        binarySearchTree.insert(element2);
        binarySearchTree.insert(element3);
        const foundElement1 = binarySearchTree.find(20);
        expect(foundElement1).toEqual(null);
      });
    });
  
    describe('size', () => {
      it('should return 0 when no elements have been inserted', () => {
        expect(binarySearchTree.size).toEqual(0);
      });
  
      it('should return 1 when 1 element has been inserted', () => {
        const element1 = {
          key: 5,
        };
        binarySearchTree.insert(element1);
        expect(binarySearchTree.size).toEqual(1);
      });
  
      it('should return 3 when 3 elements have been inserted', () => {
        expect(binarySearchTree.size).toEqual(0);
        const element1 = {
          key: 5,
        };
        const element2 = {
          key: 10,
        };
        const element3 = {
          key: 14,
        };
        binarySearchTree.insert(element1);
        binarySearchTree.insert(element2);
        binarySearchTree.insert(element3);
        expect(binarySearchTree.size).toEqual(3);
      });
  
      // it('should return 2 when 3 elements are inserted and one is removed', () => {
      //   expect(binarySearchTree.size).toEqual(0);
      //   const element1 = {
      //     key: 5,
      //   };
      //   const element2 = {
      //     key: 10,
      //   };
      //   const element3 = {
      //     key: 14,
      //   };
      //   binarySearchTree.insert(element1);
      //   binarySearchTree.insert(element2);
      //   binarySearchTree.insert(element3);
      //   expect(binarySearchTree.size).toEqual(3);
      //   binarySearchTree.remove(element1.key);
      //   expect(binarySearchTree.size).toEqual(2);
      // });
  
      // it('should return 0 when 3 elements have been inserted and 3 are removed', () => {
      //   const element1 = {
      //     key: 5,
      //   };
      //   const element2 = {
      //     key: 10,
      //   };
      //   const element3 = {
      //     key: 14,
      //   };
      //   expect(binarySearchTree.size).toEqual(0);
      //   binarySearchTree.insert(element1);
      //   binarySearchTree.insert(element2);
      //   binarySearchTree.insert(element3);
      //   expect(binarySearchTree.size).toEqual(3);
      //   binarySearchTree.remove(element1.key);
      //   expect(binarySearchTree.size).toEqual(2);
      //   binarySearchTree.remove(element2.key);
      //   expect(binarySearchTree.size).toEqual(1);
      //   binarySearchTree.remove(element3.key);
      //   expect(binarySearchTree.size).toEqual(0);
      // });
    });
  });