var n= 6;
var k=3;
var contests = [ [ 5, 1 ], [ 2, 1 ], [ 1, 1 ], [ 8, 1 ], [ 10, 0 ], [ 5, 0 ] ] ;
function LuckBalance(n,k,contests){
List<Integer> important = new ArrayList<>();
List<Integer> notImportant = new ArrayList<>();
        
        for (int[] cont : contests) {
            if (cont[1] == 1) {
                important.add(cont[0]);
            } else {
                notImportant.add(cont[0]);
            }
        }
        int notImportantLuck = notImportant
            .stream()
            .reduce(0, (a, b) -> a + b);
        Collections.sort(important);
        int luckLimit = important.size() - k < 0 ? 0 : important.size() - k;
        int importantLuck = important.subList(luckLimit, important.size())
            .stream()
            .reduce(0, (a, b) -> a + b)
            - important.subList(0, luckLimit)
            .stream()
            .reduce(0, (a, b) -> a + b);
       
        return notImportantLuck + importantLuck;
    }