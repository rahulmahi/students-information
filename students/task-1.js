var fabevyStudents = [{

    Photo: 'my.jpeg',
    name: "N.Rahul",
    mobile_no: 7010068320,
    Batch: "FSD 10",
    Referredby: 'Vel',
    Git: 'https://github.com/rahulmahi?tab=repositories',
    location: 'Tenkasi',
    PlacementStatus: 'Not Started'
},
{
    Photo: 'muthu.jpeg',
    name: "M.Muthukumar",
    mobile_no: 6374280764,
    Batch: "FSD 10",
    Referredby: 'Rahul',
    Git: 'https://github.com/rahulmahi?tab=repositories',
    location: 'Muppuliyoor',
    PlacementStatus: 'Not Started'
},
{
    Photo: 'vel.jpeg',
    name: "S.Chithirai vel",
    mobile_no: 8682039296,
    Batch: "FSD 10",
    Referredby: 'Mani',
    Git: 'https://github.com/chithiraivel?tab=repositories',
    location: 'vembar',
    PlacementStatus: 'Not Started'
},
{
    Photo: 'mani.jpeg',
    name: "V.Manikandan",
    mobile_no: 8838301995,
    Batch: "FSD 10",
    Referredby: 'Rahul',
    Git: 'https://github.com/anikumarm123?tab=repositories',
    location: 'pk valasai',
    PlacementStatus: 'Not Started'
},
];

function student() {
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var arr = ['Photo', 'Name', 'mobile', 'Batch', 'Referredby', "Git", 'location', 'PlacementStatus']
    for (let i = 0; i < arr.length; i++) {
        var th = document.createElement('th');
        th.textContent = arr[i];
        tr.append(th);
        table.append(tr);
    }
    for (let i = 0; i < fabevyStudents.length; i++) {

        var td = document.createElement('tr');

        var photo_no = document.createElement('td');
        var image = document.createElement('img');
        image.className = 'img'
        image.src = fabevyStudents[i].Photo;
        photo_no.append(image)

        var name = document.createElement('td');
        name.textContent = fabevyStudents[i].name;

        var ph_no = document.createElement('td');
        ph_no.textContent = fabevyStudents[i].mobile_no;

        var batch_no = document.createElement('td');
        batch_no.textContent = fabevyStudents[i].Batch;

        var Refered_by = document.createElement('td');
        Refered_by.textContent = fabevyStudents[i].Referredby;

        var git = document.createElement('td');
        var a1 = document.createElement('a')
        a1.href = fabevyStudents[i].Git;
        a1.textContent = fabevyStudents[i].Git;
        git.append(a1)

        var location = document.createElement('td');
        location.textContent = fabevyStudents[i].location;

        var place = document.createElement('td');
        place.textContent = fabevyStudents[i].PlacementStatus;

        td.append(photo_no, name, ph_no, batch_no, Refered_by, git, location, place);
        table.append(td)

        document.body.append(table);

    }
}
student();







