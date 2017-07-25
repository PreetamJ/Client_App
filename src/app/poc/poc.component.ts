import { Component, OnInit } from '@angular/core';

import { POCService } from "../app.service";

declare var d3: any;

@Component({
    selector: 'poc',
    templateUrl: './poc.component.html',
    styleUrls: ['./poc.component.css']
})
export class POCComponent {
    message;
    dataObj;
    showMap1Obj: any;
    flag: any;

    constructor(private pocService: POCService) {
        this.flag = false;
    }

    ngOnInit() {

    }
    /**
     * This method calls REST service from POCController which reads JSON file and stores it in Hierarchy collection
     * Returns message from REST service whether it went successful or not
     */
    readAndStore() {
        console.log("Inside readAndStore");
        this.pocService.readNStore().subscribe(data => this.message = data,
            error => console.log(error));
        console.log(this.message);

    }
    /**
     * This method invokes REST service from POCController which retrieves data from Hierarchy table and displayes it in Radial Tree View
     */
    showTreeMap() {
        console.log("Inside showTreeMap");
        this.pocService.showTree().subscribe(data => this.createTree(data),
            error => console.log(error));
        console.log("inside showTreeMap**" + this.dataObj);

    }

/**
 * Creates a Radial Tree View from dataObject received 
 * @param dataObject 
 */
    createTree(dataObject) {
        console.log("inside div");
        console.log(dataObject);
        console.log(this.flag);
        var data = dataObject;
        if (this.flag == false) {
            var canvas = d3.select("body").append("svg").attr("width", 1000)
                .attr("height", 1500).append("g").attr("transform", "translate(500,500)");

            this.flag = true;
        }
        //var group = canvas.append("g").attr("transform", "translate(150,150)");

        console.log(this.flag);
        var stratify = d3.stratify()
            .parentId(function (d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

        var tree = d3.tree()
            .size([2 * Math.PI, 500]);

        var root = d3.hierarchy(data);
        tree(root);

        console.log(root.descendants());

        console.log(root.descendants().slice(1));

        var link = canvas.selectAll(".link")
            .data(root.links())
            .enter().append("path")
            .attr("class", "link")
            .attr("d", d3.linkRadial()
                .angle(function (d) { return d.x; })
                .radius(function (d) { return d.y; }));

        function radialPoint(x, y) {
            return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
        }

        var node = canvas.selectAll(".node")
            .data(root.descendants())
            .enter().append("g")
            .attr("class", function (d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
            .attr("transform", function (d) { return "translate(" + radialPoint.call(this, d.x, d.y) + ")"; });

        node.append("circle")
            .attr("r", 2.5)
            .attr("fill", "red");

        node.append("text")
            .attr("dy", "0.31em")
            .attr("x", function (d) { return d.x < Math.PI === !d.children ? 6 : -6; })
            .attr("text-anchor", function (d) { return d.x < Math.PI === !d.children ? "start" : "end"; })
            .attr("transform", function (d) { return "rotate(" + (d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI + ")"; })
            .text(function (d) { return d.data.id; });

        var link = canvas.selectAll(".link")
            .data(root.links())
            .enter().append("path")
            .attr("class", "link")
            .attr("d", d3.linkRadial()
                .angle(function (d) { return d.x; })
                .radius(function (d) { return d.y; }));

    }


}
