//Find all the topics and tasks which are thought in the month of October

db.topics.aggregate([
    {$lookup:{
        from:'tasks',
        localField:'topic_id',
        foreignField:'topic_id',
        as:'tasks'}},
    {$match:{month:'october'}
    }
    ])

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({$and: [{date:{$gte:"2020-10-15"}},{date:{$lte:"2020-10-30"}}]});

//Find all the company drives and students who are appeared for the placement.
db.company_drives.find();

//Find the number of problems solved by the user in codekata
db.codekata.aggregate([
    {
        $group:{
            _id:`$user_id`,
            Completed:{$sum:"$no_of_problems_solved"}
        }
    }]);

//Find all the mentors with who has the mentee's count more than 15

db.mentors.find({$and: [{no_of_mentees:{$gt:"15"}}]})

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendence.find({$and: [{status:"absent"},
{date:{$gte:('2020-10-15')}},
{date:{$lte:('2020-10-31')}}]
})
    